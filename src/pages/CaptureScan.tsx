import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import Loading from './Loading';

import linkQR from '../data/linkQR'
import { setGenus, randomizePartSoal, clearData } from '../redux/slices/dataSlice'
import { useAppDispatch } from '../redux/hooks'


export default function CaptureScan() {

  const dispatch = useAppDispatch()
  const { hash } = useParams()
  const navigate = useNavigate()
  const [isError, setError] = useState(false)

  useEffect(() => {
    //Retrieve the hash from the url (localhost:3000/qr/<hash>)
    
    //Check if the hash is in the list of QR codes
    const materi = linkQR.find(materi => materi.hash === hash);
    if (materi){
      dispatch(clearData())
      //Update redux state
      dispatch(setGenus(materi.genus))
      dispatch(randomizePartSoal())
      //Navigate to the next page
      navigate('/', { replace: true })
    }
    else {
      setError(true);
    }
  }, [dispatch, navigate, hash])

  return isError ? <div>Error</div> : <Loading />
}
