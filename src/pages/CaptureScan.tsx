import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Loading from './Loading';

import linkQR from '../data/linkQR'
import { setGenus } from '../redux/slices/dataSlice'
import { useAppDispatch } from '../redux/hooks'

export default function CaptureScan() {

  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [isError, setError] = useState(false)

  useEffect(() => {
    //Retrieve the hash from the url (localhost:3000/qr/<hash>)
    const hash = window.location.pathname.split('/').at(-1);
    
    //Check if the hash is in the list of QR codes
    const materi = linkQR.find(materi => materi.hash === hash);
    if (materi){
      //Update redux state
      dispatch(setGenus(materi.genus))
      localStorage.setItem('hash', hash!)
      //Navigate to the next page
      navigate('/', { replace: true })
    }
    else {
      setError(true);
    }
  }, [dispatch, navigate])

  return isError ? <div>Error</div> : <Loading />
}
