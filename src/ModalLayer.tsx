import React from "react"
import { useSelector } from "react-redux"
import { ProjectSaveModal } from "./ProjectSaveModal"
import { modalNameSelector } from "./modules/modals/selectors"
import { ProjectsModal } from "./ProjectsModal"

export const ModalLayer = () => {
  const modalName = useSelector(modalNameSelector)

  switch(modalName){
    case "PROJECTS_MODAL": {
      return <ProjectsModal />
    }
    
    case "PROJECTS_SAVE_MODAL": {
      return <ProjectSaveModal />
    }
    default:
      return null
  }
}
