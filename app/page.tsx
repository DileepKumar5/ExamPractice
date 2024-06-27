"use client"
import React, { useCallback, useEffect, useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button'
import { RiDeleteBin6Line } from "react-icons/ri";
import Link from 'next/link';
import Createform from '@/components/Createform';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { deleteLorem1, getLorem1 } from './actions/createLorem';
import { number } from 'zod';






const Home = () => {

  // const [Loreminfo, setLoreminfo] = useState<any>();

  // useEffect(() => {

  //   getLorem1()
  //     .then((Loreminfo: any) => {
  //       setLoreminfo(Loreminfo)
  //       console.log(Loreminfo)

  //     });
  // }, [Loreminfo])


  const [data, setData] = useState<any>()

  useEffect(() => {
    getLorem1()
      .then((data:any) => {
        setData(data)
        console.log(data)
      })
  }, [setData])

  const handledelete = useCallback((id:string) => {
    deleteLorem1(id);

  
  }, []);

  
  // const Loreminfo = [
  //   {
  //     id: '0',
  //     name: 'Hello'
  //   },
  //   {
  //     id: '1',
  //     name: 'Hellos'
  //   },
  //   {
  //     id: '2',
  //     name: 'hi',
  //   },
  //   {
  //     id: '3',
  //     name: 'aliza'
  //   },
  // ]

  return (
    <div className='flex flex-col bg-yellow-100 w-full h-screen'>
      <div className='grid grid-cols-3 justify-items-center mt-10'>
        <div className='border border-black  h-[100px] w-[200px] bg-green-200 rounded-md flex justify-center items-center flex-col'>
          <div className='text-xl text-black '>lorem ipsum</div>
          <div className='text-6xl text-black font-mono'>03</div>
        </div>
        <div className='border border-black  h-[100px] w-[200px] bg-pink-400 rounded-md flex justify-center items-center flex-col'>
          <div className='text-xl text-black '>lorem ipsum</div>
          <div className='text-6xl text-black font-mono'>11</div>
        </div>
        <div className='border border-black h-[100px] w-[200px] bg-orange-300 rounded-md flex justify-center items-center flex-col'>
          <div className='text-xl text-black '>lorem ipsum</div>
          <div className='text-6xl text-black font-mono'>52</div>
        </div>
      </div>
      <div className='flex items-center justify-center mt-10 space-x-4'>
        {/* <Input className=' w-[1200px] h-[50px]' placeholder='Enter Something here' />
        <Button className='ml-4 h-[50px] w-[150px] ' type='submit'>Create</Button> */}
        <Createform />
      </div>

      <div className='flex flex-col mt-10 gap-y-9'>
        {

          data?.map((singlelorem:any, index:number) => {
            return (
              <Card key={index}>

                <CardContent>
                  {singlelorem.name}
                </CardContent>
                <CardFooter className='flex justify-between items-center'>

                  <Button variant='destructive'>Click me</Button>

                  <Button variant='ghost' onClick={()=> handledelete(singlelorem.id)}>
                    <RiDeleteBin6Line className='w-8 h-8' />
                  </Button>

                </CardFooter>
              </Card>

            )

          }

          )



        }






      </div>




      {/* <div className='flex flex-col space-y-6  mt-10'>


      {
        Loreminfo.map((Loreminfoms) => {
          return (

            <Card className='flex flex-col space-y-6 '>

              <CardContent >
             {Loreminfoms.name}
              </CardContent>
              <CardFooter className='flex justify-between items-center'>
                <Button className='w-48 rounded-2xl bg-red-500 border border-black'>
                  Click Me

                </Button>
               
                <Button variant='ghost' >
                  <RiDeleteBin6Line className='w-8 h-8'/>
                  </Button>                
              </CardFooter>
            </Card>
          )

        })
      }
      </div> */}




    </div>







  )
}

export default Home
