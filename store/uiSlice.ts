import { create } from "zustand"

interface UiState {
  mobileMenuOpen: boolean
  setMobileMenuOpen: (open: boolean) => void
  toggleMobileMenu: () => void
  servicesMenuOpen: boolean
  setServicesMenuOpen: (open: boolean) => void
  openServicesMenu: () => void
  scheduleCloseServicesMenu: () => void
  projectsMenuOpen: boolean
  setProjectsMenuOpen: (open: boolean) => void
  openProjectsMenu: () => void
  scheduleCloseProjectsMenu: () => void
  blogMenuOpen: boolean
  setBlogMenuOpen: (open: boolean) => void
  openBlogMenu: () => void
  scheduleCloseBlogMenu: () => void
  faqMenuOpen: boolean
  setFaqMenuOpen: (open: boolean) => void
  openFaqMenu: () => void
  scheduleCloseFaqMenu: () => void
}

let servicesMenuCloseTimer: ReturnType<typeof setTimeout> | undefined
let projectsMenuCloseTimer: ReturnType<typeof setTimeout> | undefined
let blogMenuCloseTimer: ReturnType<typeof setTimeout> | undefined
let faqMenuCloseTimer: ReturnType<typeof setTimeout> | undefined

function clearMegaMenuTimers() {
  if (servicesMenuCloseTimer) {
    clearTimeout(servicesMenuCloseTimer)
    servicesMenuCloseTimer = undefined
  }
  if (projectsMenuCloseTimer) {
    clearTimeout(projectsMenuCloseTimer)
    projectsMenuCloseTimer = undefined
  }
  if (blogMenuCloseTimer) {
    clearTimeout(blogMenuCloseTimer)
    blogMenuCloseTimer = undefined
  }
  if (faqMenuCloseTimer) {
    clearTimeout(faqMenuCloseTimer)
    faqMenuCloseTimer = undefined
  }
}

function closeOtherMegaMenus(
  current: "services" | "projects" | "blog" | "faq",
) {
  return {
    servicesMenuOpen: current === "services",
    projectsMenuOpen: current === "projects",
    blogMenuOpen: current === "blog",
    faqMenuOpen: current === "faq",
  }
}

export const useUiStore = create<UiState>((set) => ({
  mobileMenuOpen: false,
  setMobileMenuOpen: (open) => set({ mobileMenuOpen: open }),
  toggleMobileMenu: () =>
    set((state) => ({ mobileMenuOpen: !state.mobileMenuOpen })),
  servicesMenuOpen: false,
  setServicesMenuOpen: (open) =>
    set((state) => ({
      servicesMenuOpen: open,
      projectsMenuOpen: open ? false : state.projectsMenuOpen,
      blogMenuOpen: open ? false : state.blogMenuOpen,
      faqMenuOpen: open ? false : state.faqMenuOpen,
    })),
  openServicesMenu: () => {
    clearMegaMenuTimers()
    set(closeOtherMegaMenus("services"))
  },
  scheduleCloseServicesMenu: () => {
    if (servicesMenuCloseTimer) clearTimeout(servicesMenuCloseTimer)
    servicesMenuCloseTimer = setTimeout(() => {
      set({ servicesMenuOpen: false })
      servicesMenuCloseTimer = undefined
    }, 250)
  },
  projectsMenuOpen: false,
  setProjectsMenuOpen: (open) =>
    set((state) => ({
      projectsMenuOpen: open,
      servicesMenuOpen: open ? false : state.servicesMenuOpen,
      blogMenuOpen: open ? false : state.blogMenuOpen,
      faqMenuOpen: open ? false : state.faqMenuOpen,
    })),
  openProjectsMenu: () => {
    clearMegaMenuTimers()
    set(closeOtherMegaMenus("projects"))
  },
  scheduleCloseProjectsMenu: () => {
    if (projectsMenuCloseTimer) clearTimeout(projectsMenuCloseTimer)
    projectsMenuCloseTimer = setTimeout(() => {
      set({ projectsMenuOpen: false })
      projectsMenuCloseTimer = undefined
    }, 250)
  },
  blogMenuOpen: false,
  setBlogMenuOpen: (open) =>
    set((state) => ({
      blogMenuOpen: open,
      servicesMenuOpen: open ? false : state.servicesMenuOpen,
      projectsMenuOpen: open ? false : state.projectsMenuOpen,
      faqMenuOpen: open ? false : state.faqMenuOpen,
    })),
  openBlogMenu: () => {
    clearMegaMenuTimers()
    set(closeOtherMegaMenus("blog"))
  },
  scheduleCloseBlogMenu: () => {
    if (blogMenuCloseTimer) clearTimeout(blogMenuCloseTimer)
    blogMenuCloseTimer = setTimeout(() => {
      set({ blogMenuOpen: false })
      blogMenuCloseTimer = undefined
    }, 250)
  },
  faqMenuOpen: false,
  setFaqMenuOpen: (open) =>
    set((state) => ({
      faqMenuOpen: open,
      servicesMenuOpen: open ? false : state.servicesMenuOpen,
      projectsMenuOpen: open ? false : state.projectsMenuOpen,
      blogMenuOpen: open ? false : state.blogMenuOpen,
    })),
  openFaqMenu: () => {
    clearMegaMenuTimers()
    set(closeOtherMegaMenus("faq"))
  },
  scheduleCloseFaqMenu: () => {
    if (faqMenuCloseTimer) clearTimeout(faqMenuCloseTimer)
    faqMenuCloseTimer = setTimeout(() => {
      set({ faqMenuOpen: false })
      faqMenuCloseTimer = undefined
    }, 250)
  },
}))
