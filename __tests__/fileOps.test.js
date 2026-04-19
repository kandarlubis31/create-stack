import { describe, it, expect, afterEach } from 'vitest';
import fs from 'fs-extra';
import path from 'path';
import { createProjectFolder } from '../src/utils/fileOps';

const testTargetDir = path.join(process.cwd(), 'test-app-generate');

describe('fileOps - createProjectFolder', () => {
  afterEach(async () => {
    await fs.remove(testTargetDir);
  });

  it('harus berhasil membuat folder baru', async () => {
    await createProjectFolder(testTargetDir);
    const folderExists = await fs.pathExists(testTargetDir);
    
    expect(folderExists).toBe(true);
  });

  it('harus melempar error jika folder sudah ada', async () => {
    await fs.ensureDir(testTargetDir);
    
    await expect(createProjectFolder(testTargetDir)).rejects.toThrow();
  });
});