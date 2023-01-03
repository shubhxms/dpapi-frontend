import React from 'react'
import Dashboard from '../components/dashboard/Dashboard'
import { useSigner } from 'wagmi';
import FormPage from '../components/form/FormPage';
import Header from '../components/header/Header';
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'
import { Card, CardHeader, CardBody, CardFooter,
  Stack, StackDivider, Box,
  Heading, Text
} from '@chakra-ui/react'

function dashboard(props) {
    // update user identifier
    let {dataProps} = props
    // let data = dataProps

    //router
    const router = useRouter()
    const userId = router.asPath.slice(1)



    // signer
    const signer = useSigner()
    const address = signer?.data?._address
    
    // fetching data

    
    // editing record
    const editingData = async (item) => {
      let newData = {}
      Object.entries(dataProps).forEach(([key, value]) => {
        if(key === item.key){
          newData[key] = item[key]
        }else{
          newData[key] = value
        }
      })
      let data = await fetch(`https://database.deta.sh/v1/d07jlai2/humans/items`,
      {
        headers: {
          'X-API-Key': process.env.DETA_PROJECT_KEY,
          'Content-Type' : 'application/json'
        },
        body: JSON.stringify(
          {"items":[
            item
          ]} 
        )
      })

    }

    // adding new item
    const addData = async (item) => {
      let newData = {...dataProps, ...item}
    
      console.dir(newData);
      console.log(JSON.stringify(newData))

      if(address !== newData.key){
        return {
          message: "you aren't supposed to edit others files idiot"
        }
      }
      let data = await fetch(`https://database.deta.sh/v1/d07jlai2/humans/items`,
      {
        method: "PUT",
        headers: {
          'X-API-Key': process.env.DETA_PROJECT_KEY,
          'Content-Type' : 'application/json'
        },
        body:
          JSON.stringify({
            "items": [{...newData}]    
          })
      })
      console.log(await data.json());
    }


  return (
    <div>
        <Header/>
        <br/>

        <div className={styles.main}>
        <Card variant='elevated' size='sm' minW='40vw' maxW='60vw'>
          <CardHeader>
          fetch your data by sending a get request at
          </CardHeader>
          <a href={`papi.deta.dev/${userId}`}>
            <CardBody className={styles.card}>
                <div className={styles.code}>
                  {`papi.deta.dev/${userId}`}
                </div>
            </CardBody>
          </a>
        </Card>
        </div>
        {address === userId && <FormPage addData={addData}/>}
        {/* <br/> */}
        {dataProps && <Dashboard dataProps={dataProps} userIdentifier={userId}/>}
        
    </div>
  )
}




export const getServerSideProps = async (context) => {
  try{    
    let data = await fetch(
      `https://gstnat.deta.dev/${context.params.userIdentifier}`,
      {
      headers: {
        'X-API-Key': process.env.DETA_PROJECT_KEY,
        'Content-Type' : 'application/json'
      },
    })
    let dataProps = await data.json()
    return {
        props: {
          dataProps
        },
    }
  }catch{
    res.statusCode = 404;
    return {
      props: {}
    };
  }
}

// export const getStaticPaths = async () => {
//   return {
//       paths: [], //indicates that no page needs be created at build time
//       fallback: true //indicates the type of fallback
//   }
// }

export default dashboard