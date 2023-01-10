import React, {useState, useEffect} from 'react'

// chakra ui imports
import { EditablePreview, Box, useColorModeValue, IconButton, Input, useDisclosure, useEditableControls, ButtonGroup, SlideFade, Editable, Tooltip, EditableInput } from "@chakra-ui/react";

// icon imports
import { Check, X } from 'react-feather'

function EditableItem(props) {

    // props
    const {dataProps, dataKey, isDisabled, handleUpdate} = props

    // let dataObj = {dataKey: dataProps[1]}

    // state vars
    const [data, setData] = useState(dataProps)
    const [key, setKey] = useState(dataKey)
    const [value, setValue] = useState(dataProps[1])

    // useEffect(() => {

    //   // if (data[key] !== dataProps[0]){
    //     let newData = {}

    //     setKey(dataProps[0])
    //     newData[dataProps[0]] = dataProps[1]
    //     setData(newData)
    //   // dataPair}

    // }, [])

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
          {/* {data &&  */}
            <Editable
                defaultValue={key}
                isPreviewFocusable={true}
                selectAllOnFocus={false}          
                isDisabled
            >
                <Tooltip label="edit functionality soon" isDisabled>
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
                defaultValue={value}
                isPreviewFocusable={true}
                selectAllOnFocus={false}
                onSubmit={e => {
                  let newData = {}
                  newData[key] = e
                  handleUpdate(newData)
                }}
                isDisabled={isDisabled}
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
          {/* } */}
      </div>
      )
}

export default EditableItem