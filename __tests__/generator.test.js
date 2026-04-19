import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import fs from 'fs-extra';
import path from 'path';
import generator from '../src/generator';

const packageManager = require('../src/utils/packageManager');

vi.mock('child_process', () => ({
  execSync: vi.fn(),
}));

vi.spyOn(packageManager, 'installDependencies').mockImplementation(() => {});

const testProjectName = 'test-e2e-app';
const testTargetPath = path.join(process.cwd(), testProjectName);

describe('Generator Integration', () => {
  beforeEach(async () => {
    await fs.remove(testTargetPath);
  });

  afterEach(async () => {
    await fs.remove(testTargetPath);
    vi.clearAllMocks();
  });

  it('harus menggenerate full project React/Vite', async () => {
    const mockAnswers = {
      stackValue: 'react',
      projectName: testProjectName,
      git: true,
      install: true,
      pkgType: 'pnpm'
    };

    await generator(mockAnswers);

    const pkgPath = path.join(testTargetPath, 'package.json');
    const pkgContent = await fs.readJson(pkgPath);

    expect(await fs.pathExists(testTargetPath)).toBe(true);
    expect(await fs.pathExists(pkgPath)).toBe(true);
    expect(pkgContent.name).toBe(testProjectName);
    expect(await fs.pathExists(path.join(testTargetPath, 'vite.config.js'))).toBe(true);
    expect(await fs.pathExists(path.join(testTargetPath, 'src/main.jsx'))).toBe(true);
    expect(packageManager.installDependencies).toHaveBeenCalledWith(testTargetPath, 'pnpm');
  }, 15000);
});