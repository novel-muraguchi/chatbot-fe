import { render } from '@testing-library/react'
import { CustomRenderProvider } from '../providers/customRenderProvider.tsx'
import { type ReactElement } from 'react'

export const customRender = (ui: ReactElement) => {
  return render(<CustomRenderProvider>{ui}</CustomRenderProvider>)
}
