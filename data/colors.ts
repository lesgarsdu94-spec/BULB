export const ROUGE_COQUELICOT: ColorChoice = { value: '#ff0014', label: 'Rouge Coquelicot' }
export const ORANGE: ColorChoice = { value: '#ff5a00', label: 'Orange' }
export const JAUNE_VIF: ColorChoice = { value: '#ffbe00', label: 'Jaune Vif' }
export const JAUNE_OCRE: ColorChoice = { value: '#dc9600', label: 'Jaune Ocre' }
export const MARON: ColorChoice = { value: '#6e491e', label: 'Marron' }
export const OLIVE_CLAIR: ColorChoice = { value: '#d2d200', label: 'Olive Clair' }
export const OLIVE_FONCE: ColorChoice = { value: '#6e6e00', label: 'Olive Foncé' }
export const VERT_FONCE: ColorChoice = { value: '#00643c', label: 'Vert Foncé' }
export const VERT_CLAIR: ColorChoice = { value: '#82dc73', label: 'Vert Clair' }
export const TURQUOISE: ColorChoice = { value: '#00a092', label: 'Turquoise' }
export const BLEU_CLAIR: ColorChoice = { value: '#82c8e6', label: 'Bleu Clair' }
export const BLEU_OUTREMER: ColorChoice = { value: '#3c91dc', label: 'Bleu Outremer' }
export const BLEU_FONCE: ColorChoice = { value: '#0055c8', label: 'Bleu Foncé' }
export const VIOLET: ColorChoice = { value: '#640082', label: 'Violet' }
export const MAGENTA: ColorChoice = { value: '#a0006e', label: 'Magenta' }
export const LILAS: ColorChoice = { value: '#d282be', label: 'Lilas' }
export const ROSE: ColorChoice = { value: '#ff82b4', label: 'Rose' }
export const ROUGE_FRAMBOISE: ColorChoice = { value: '#a50034', label: 'Rouge Framboise' }

export const COLORS: ColorChoice[] = [
  ROUGE_COQUELICOT,
  ORANGE,
  JAUNE_VIF,
  JAUNE_OCRE,
  MARON,
  OLIVE_CLAIR,
  OLIVE_FONCE,
  VERT_FONCE,
  VERT_CLAIR,
  TURQUOISE,
  BLEU_CLAIR,
  BLEU_OUTREMER,
  BLEU_FONCE,
  VIOLET,
  MAGENTA,
  LILAS,
  ROSE,
  ROUGE_FRAMBOISE,
]

export function findColorByValue(value: string | null, fallback: string): ColorChoice | null {
  if (value === null) return null
  return COLORS.find(color => color.value === value) ?? {
    value,
    label: fallback,
  }
}
