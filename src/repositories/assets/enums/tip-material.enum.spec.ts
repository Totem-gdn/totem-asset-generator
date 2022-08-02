import { getRandomTipMaterial, TipMaterial } from './tip-material.enum';

const tipMaterialValues = [TipMaterial.Wood, TipMaterial.Bone, TipMaterial.Flint, TipMaterial.Obsidian];

test('should generate random TipMaterialEnum', () => {
  expect(tipMaterialValues).toContain(getRandomTipMaterial());
});
