import { vi } from 'vitest'
import '@testing-library/jest-dom/vitest'
import ResizeObserver from 'resize-observer-polyfill'

global.ResizeObserver = ResizeObserver

// 👇 再代入自体は window.matchMedia に対して直接行う
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
})