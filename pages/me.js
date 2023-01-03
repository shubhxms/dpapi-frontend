import React from 'react'

import { useSigner } from 'wagmi';

import { useRouter } from 'next/router'


function Me() {

    // signer
    const signer = useSigner()
    const address = signer?.data?._address

    // router object
    const router = useRouter()


    // if no signer, that is wallet is not connected
    if (!address){
        return (
            <div>please log in</div>
          )
    }

    // if wallet is connected
    if (address){
        router.push(`/${address}`)
    }
 


}

export default Me