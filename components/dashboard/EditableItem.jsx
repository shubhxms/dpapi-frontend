import React, {useState} from 'react'

// chakra ui imports
import { EditablePreview, Box, useColorModeValue, IconButton, Input, useDisclosure, useEditableControls, ButtonGroup, SlideFade, Editable, Tooltip, EditableInput } from "@chakra-ui/react";

// icon imports
import { Check, X } from 'react-feather'

function EditableItem(props) {

    // props
    const {dataProps, isDisabled, handleEdit} = props

    // state vars
    const [data, setData] = useState(dataProps)
    
    // function to emit back changes
    const emitChanges = () => {

    }

    // function to handle editing
    function EditableControls() {
        const {
          isEditing,
          getSubmitButtonProps,
          getCancelButtonProps,
          getEditButtonProps
        } = useEditableControls();
    
        return isEditing ? (
          <ButtonGroup justifyContent="end" size="sm" w="full" spacing={2} mt={2}>
            <IconButton icon={<Check/>} {...getSubmitButtonProps()}/>
            <IconButton icon={<X/>} {...getCancelButtonProps()}/>
          </ButtonGroup>
        ) : null;
      }

    return (
        <div>
            <Editable
                defaultValue={data[0]}
                isPreviewFocusable={true}
                selectAllOnFocus={false}
                onSubmit={e => {
                  let newData = data
                  newData[0] = e
                  setData(newData)
                }}                
                isDisabled
            >
                <Tooltip label="edit functionality soon">
                    <EditablePreview
                        py={2}
                        px={4}
                        _hover={{
                        background: useColorModeValue("gray.100", "gray.700")
                        }}
                    />
                </Tooltip>
                <Input py={2} px={4} as={EditableInput} />
                <EditableControls />
            </Editable>
            -
            <Editable
                defaultValue={data[1]}
                isPreviewFocusable={true}
                selectAllOnFocus={false}
                onSubmit={e => {
                  let newData = data
                  newData[1] = e
                  setData(newData)
                }}
                isDisabled
            >
                <Tooltip label="edit functionality soon">
                    <EditablePreview
                        py={2}
                        px={4}
                        _hover={{
                        background: useColorModeValue("gray.100", "gray.700")
                        }}
                    />
                </Tooltip>
                <Input py={2} px={4} as={EditableInput} />
                <EditableControls />
            </Editable>
      </div>
      )
}

export default EditableItem