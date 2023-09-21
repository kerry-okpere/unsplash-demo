import { PER_PAGE } from "../constants"

export const isFromMenu = (id: string, element?: EventTarget & Element | null) => {
  if (!element) return false

  const isMenuButton = element.tagName.toLowerCase() === 'button' && element.id.startsWith(id)
  const isMenuItem = element.tagName.toLowerCase() === 'li' && element.id.startsWith(id) 

  return isMenuButton || isMenuItem
}

export const getPagination = (data: { page: number; total: number }) => {
  const range = PER_PAGE * data.page;

  const peek = range - PER_PAGE + 1;
  const end = data.total > range ? range : data.total;

  const isLastPage = end === data.total;
  const isFirstPage = data.page === 1;

  return {
    peek,
    end,
    isFirstPage,
    isLastPage,
  };
};



