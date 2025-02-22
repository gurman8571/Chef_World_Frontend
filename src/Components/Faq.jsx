import React from 'react'
import {PROJECT_NAME} from '../Constants'
export default function Faq() {
  return (
    <section
    id="faq"
    aria-labelledby="faq-title"
    style={{
      
  
}}
    className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
  >
   
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
      <div className="mx-auto max-w-2xl lg:mx-0">
        <h2
          id="faq-title"
          className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
        >
          Frequently asked questions
        </h2>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
          If you can’t find what you’re looking for, email our support team and if
          you’re lucky someone will get back to you.
        </p>
      </div>
      <ul
     
        className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
      >
        <li>
          <ul className="flex flex-col gap-y-8">
            <li>
              <h3 className="font-display text-lg leading-7 text-slate-900">
                Does {PROJECT_NAME}  handle VAT?
              </h3>
              <p className="mt-4 text-sm text-slate-700">
                Well no, but if you move your company offshore you can probably
                ignore it.
              </p>
            </li>
            <li>
              <h3 className="font-display text-lg leading-7 text-slate-900">
                Can I pay for my subscription via purchase order?
              </h3>
              <p className="mt-4 text-sm text-slate-700">
                Absolutely, we are happy to take your money in all forms.
              </p>
            </li>
            <li>
              <h3 className="font-display text-lg leading-7 text-slate-900">
                How do I apply for a job at {PROJECT_NAME} ?
              </h3>
              <p className="mt-4 text-sm text-slate-700">
                We only hire our customers, so subscribe for a minimum of 6 months
                and then let’s talk.
              </p>
            </li>
          </ul>
        </li>
        <li>
          <ul  className="flex flex-col gap-y-8">
            <li>
              <h3 className="font-display text-lg leading-7 text-slate-900">
                What was that testimonial about tax fraud all about?
              </h3>
              <p className="mt-4 text-sm text-slate-700">
                {PROJECT_NAME}  is just a software application, ultimately your books are
                your responsibility.
              </p>
            </li>
            <li>
              <h3 className="font-display text-lg leading-7 text-slate-900">
                {PROJECT_NAME}  sounds horrible but why do I still feel compelled to
                purchase?
              </h3>
              <p className="mt-4 text-sm text-slate-700">
                This is the power of excellent visual design. You just can’t
                resist it, no matter how poorly it actually functions.
              </p>
            </li>
            <li>
              <h3 className="font-display text-lg leading-7 text-slate-900">
                I found other companies called {PROJECT_NAME} , are you sure you can use
                this name?
              </h3>
              <p className="mt-4 text-sm text-slate-700">
                Honestly not sure at all. We haven’t actually incorporated or
                anything, we just thought it sounded cool and made this website.
              </p>
            </li>
          </ul>
        </li>
        <li>
          <ul className="flex flex-col gap-y-8">
            <li>
              <h3 className="font-display text-lg leading-7 text-slate-900">
                How do you generate reports?
              </h3>
              <p className="mt-4 text-sm text-slate-700">
                You just tell us what data you need a report for, and we get our
                kids to create beautiful charts for you using only the finest
                crayons.
              </p>
            </li>
            <li>
              <h3 className="font-display text-lg leading-7 text-slate-900">
                Can we expect more inventory features?
              </h3>
              <p className="mt-4 text-sm text-slate-700">
                In life it’s really better to never expect anything at all.
              </p>
            </li>
            <li>
              <h3 className="font-display text-lg leading-7 text-slate-900">
                I lost my password, how do I get into my account?
              </h3>
              <p className="mt-4 text-sm text-slate-700">
                Send us an email and we will send you a copy of our latest
                password spreadsheet so you can find your information.
              </p>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </section>
  
  )
}
