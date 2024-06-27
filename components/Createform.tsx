"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { createLorem1 } from "@/app/actions/createLorem"

export const createschema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})



const Createform = () => {
    const form = useForm<z.infer<typeof createschema>>({
        resolver: zodResolver(createschema),
        defaultValues: {
          name: "",
        },
      })
     
      // 2. Define a submit handler.
      function onSubmit(values: z.infer<typeof createschema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
        createLorem1(values)
       
      }
  return (
    <div>
            <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-row space-x-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
         
              <FormControl>
                <Input placeholder="Enter Something here" {...field} className="w-[1200px] h-[50px]" />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="h-[50px] rounded ">create</Button>
      </form>
    </Form>
      
    </div>
  )
}

export default Createform
