import React, {useState} from 'react'
import styles from '../../styles/Home.module.css'

// chakra ui
import { Card, CardBody, CardHeader,
  Stack, Box, StackDivider, FormControl,
  Input, Heading, Button }
from '@chakra-ui/react'

function FormPage(props) {

    const [keyValue, setKeyValue] = React.useState('')
    const handleKeyChange = (event) => setKeyValue(event.target.value)

    const [valValue, setValValue] = React.useState('')
    const handleValChange = (event) => setValValue(event.target.value)


    const {addData} = props

    const handleSubmit = async (e) => {
      e.preventDefault()
      let newData = {}
      newData[keyValue] = valValue
      addData(newData)
    }
  return (
    <div className={styles.main}>
      <Card variant='elevated' size='sm' minW='40vw' maxW='60vw'>

      <CardHeader>
          <Heading size='md'>add new values</Heading>
        </CardHeader>

      <CardBody>
          <Stack divider={<StackDivider />} spacing='4'>
            <form onSubmit={(e) => handleSubmit(e)}>
              <FormControl>
              <Input
                value={keyValue}
                onChange={handleKeyChange}
                placeholder='enter key here'
                isRequired
                size='sm'
              />
              </FormControl>
              -
              <FormControl>
              <Input
                  value={valValue}
                  onChange={handleValChange}
                  placeholder='enter value here'
                  isRequired
                  size='sm'
              />
              <Button type='submit'>add new datapoint</Button>
              </FormControl>
            </form>
          </Stack>
        </CardBody>
      </Card>  
    </div>
  )
}

export default FormPage

