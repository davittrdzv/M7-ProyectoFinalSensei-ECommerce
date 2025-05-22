import { useEffect } from 'react'
import { Tooltip } from 'bootstrap'

export const useTooltips = () => {
  useEffect(() => {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    // eslint-disable-next-line no-unused-vars
    const tooltipList = [...tooltipTriggerList].map(
      (tooltipTriggerEl) => new Tooltip(tooltipTriggerEl)
    )
  }, [])
}

export const getTooltipAttrs = (isAuthenticated, title = 'You must log in to add an item to your cart') => {
  return !isAuthenticated
    ? {
        'data-bs-toggle': 'tooltip',
        'data-bs-placement': 'top',
        title
      }
    : {}
}
