"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { FaInstagram, FaLinkedin, FaTelegram } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";

import { Button } from "../components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../components/ui/form"
import { Input } from "../components/ui/input"
import { Textarea } from "../components/ui/textarea" // Assuming you have a Textarea component
import { toast } from "../components/ui/use-toast"
import { mail, phone } from "../assets/icons"
import { Separator } from "./ui/separator"

const FormSchema = z.object({
  fullName: z.string().min(2, {
    message: "Full Name must be at least 2 characters.",
  }),
  emailAddress: z.string().email({
    message: "Must be a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Phone number must be at least 10 digits.",
  }),
  message: z.string().min(5, {
    message: "Message must be at least 5 characters.",
  }),
})

type ContactFieldName = "fullName" | "emailAddress" | "phone" | "message";

const contactUs: { name: ContactFieldName; label: string; placeholder: string }[] = [
  { name: "fullName", label: "Full Name", placeholder: 'Enter your name' },
  { name: "emailAddress", label: "Email Address", placeholder: 'Enter your email address' },
  { name: "phone", label: "Phone", placeholder: 'Enter your phone number' },
  { name: "message", label: "Message", placeholder: 'Enter your message' },
]

const ContactUs = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      fullName: "",
      emailAddress: "",
      phone: "",
      message: "",
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <section id="contact_us" className="flex items-start mx-[6rem] mb-[6rem] mt-[5rem]">
      <div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
            {contactUs.map(({ name, label, placeholder }) => (
              <FormField
                key={name}
                control={form.control}
                name={name}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-secondary">{label}</FormLabel>
                    <FormControl className="w-[30rem] bg-primary relative group">
                      {name === "message" ? (
                        <Textarea
                          placeholder={placeholder}
                          {...field}
                          className="text-secondary border-2 focus:border-transparent focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 group-hover:border-gradient-to-r group-hover:from-purple-500 group-hover:to-indigo-500"
                        />
                      ) : (
                        <Input
                          placeholder={placeholder}
                          {...field}
                          className="text-secondary border-2 focus:border-transparent focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 group-hover:border-gradient-to-r group-hover:from-purple-500 group-hover:to-indigo-500"
                        />
                      )}
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}
            <Button type="submit" variant="ghost" className=" text-secondary rounded-[3rem] px-[2rem] hover:bg-gradient-to-r from-purple-500 to-indigo-500 hover:text-secondary font-semibold">Contact Us</Button>
          </form>
        </Form>
      </div>
      <div className="flex flex-1 flex-col justify-center items-center gap-5 mt-[2rem]">
        <div className="flex gap-3">
          <img src={mail} alt="" className="w-[3rem] h-[3rem]" />
          <div className="flex flex-col items-center justify-center gap-1">
            <p className="text-xl font-semibold font-poppins text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500">Email Address</p>
            <p className="text-md text-secondary relative left-3">techopia369@gmail.com</p>
          </div>
        </div>
        <Separator className="w-[20rem] ml-[5rem] bg-slate-600" />
        <div className="flex items-center gap-5">
          <img src={phone} alt="" className="w-[3rem] h-[3rem] relative right-4" />
          <div className="flex flex-col items-center justify-center gap-1">
            <p className="text-xl font-semibold font-poppins text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500">Phone Number</p>
            <p className="text-md text-secondary">+251912345678</p>
          </div>
        </div>
        <Separator className="w-[20rem] ml-[5rem] bg-slate-600" />
        <div className=" flex items-center justify-center ml-[4rem] gap-7 text-secondary ">
          <div className=" bg-slate-900 p-1 rounded-sm hover:bg-gradient-to-r from-purple-500 to-indigo-500">
              <FaTelegram className=" w-[2rem] h-[2rem] cursor-pointer " />
          </div>
          <div className="bg-slate-900 p-1 rounded-sm hover:bg-gradient-to-r from-purple-500 to-indigo-500">
              <FaMedium className=" w-[2rem] h-[2rem] cursor-pointer" />
          </div>
          <div className=" bg-slate-900 p-1 rounded-sm hover:bg-gradient-to-r from-purple-500 to-indigo-500">
              <FaInstagram className=" w-[2rem] h-[2rem] cursor-pointer" />
          </div>
          <div className=" bg-slate-900 p-1 rounded-sm hover:bg-gradient-to-r from-purple-500 to-indigo-500">
              <FaLinkedin className=" w-[2rem] h-[2rem] cursor-pointer"/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactUs
