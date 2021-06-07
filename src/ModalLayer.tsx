import React from "react"
import { useSelector } from "react-redux"
import { ProjectSaveModal } from "./ProjectSaveModal"
import { modalNameSelector } from "./modules/modals/selectors"

export const ModalLayer = () => {
  const modalName = useSelector(modalNameSelector)

  switch(modalName){
    
    case "PROJECTS_SAVE_MODAL": {
      return <ProjectSaveModal />
    }
    default:
      return null
  }
}
