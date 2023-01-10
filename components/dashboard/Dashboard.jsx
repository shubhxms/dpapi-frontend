import React, {useState, useEffect} from 'react'
import { v4 as uuidv4 } from 'uuid';
import Header from '../header/Header';
import styles from '../../styles/Home.module.css'

import { useSigner } from 'wagmi';
// import styles from '../../styles/Home.module.css'

//chakra ui imports
import { Card, CardHeader, CardBody, CardFooter,
        Stack, StackDivider, Box,
        Heading, Text
} from '@chakra-ui/react'
import EditableItem from './EditableItem';

function Dashboard(props) {

    // props
    const {dataProps, userIdentifier, updateData} = props


    // state vars
    const [data, setData] = useState(dataProps)

    // signer
    const signer = useSigner()
    const address = signer?.data?._address

    // edit functionality
    const handleUpdate = (newData) => {
      updateData(newData, userIdentifier)
    }

    //emit func
    const handleEmit = (newData) => {
      let dataNew = {}
      for (let datapt in dataProps){
        if(datapt === newData[0]){
          console.log(newData)
          dataNew[newData[0]] = newData[1]
        }else{
          dataNew[datapt] = dataProps[datapt]
        }
      }
      console.log(dataNew);
    }

  return (
    <div className={styles.main}>
      <Card variant='elevated' size='sm' minW='40vw' maxW='60vw'>
        
        <CardHeader>
          <Heading size='md'>existing values</Heading>
        </CardHeader>

        <CardBody>
          <Stack divider={<StackDivider />} spacing='4'>
            {data && Object.entries(data).map(dataPair =>(
              
              <form key={uuidv4()}>
              <Box key={uuidv4()}>
                  <EditableItem
                  dataProps={dataPair}
                  dataKey={dataPair[0]}
                  isDisabled={dataPair[0] === "key" || address !== userIdentifier}
                  handleUpdate={handleUpdate}
                  />
                  
                  {/* <EditableItem 
                  dataProps={dataPair[1]}
                  isDisabled={dataPair[0] === "key" || address !== userIdentifier}/> */}
              </Box>
              </form>
            ))}
          </Stack>
        </CardBody>
      </Card>
    </div>
  )
}

export default Dashboard