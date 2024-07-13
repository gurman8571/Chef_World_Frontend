import React from 'react'
import {PROJECT_NAME} from '../Constants'
import { Link } from 'react-router-dom'
function Nav() {
  return (

    <header className="py-10">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <nav className="relative z-50 flex justify-between">
      <div className="flex items-center md:gap-x-12">
        <Link  to="/" class="text-blue-500 font-bold text-4xl">
        {PROJECT_NAME}
        </Link>
        <div className="hidden md:flex md:gap-x-6">
          <Link  to="/feed"
            className="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
           
          >
            Feed
          </Link>
          <Link  to="/"
            className="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
            
          >
            Share  Recipe
          </Link>
          <Link  to="/"
            className="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
            href="#pricing"
          >
            Blogs
          </Link>
        </div>
      </div>
      <div className="flex items-center gap-x-5 md:gap-x-8">
        <div className="hidden md:block">
          <a
            className="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
            href="/login"
          >
            Sign in
          </a>
        </div>
        <a
          className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-blue-600 text-white hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600"
          color="blue"
          variant="solid"
          href="/register"
        >
          <span>
            Get started <span className="hidden lg:inline">today</span>
          </span>
        </a>
        <div className="-mr-1 md:hidden">
          <div data-headlessui-state="">
            <button
              className="relative z-10 flex h-8 w-8 items-center justify-center ui-not-focus-visible:outline-none"
              aria-label="Toggle Navigation"
              type="button"
              aria-expanded="false"
              data-headlessui-state=""
              id="headlessui-popover-button-:R5v6fja:"
            >
              <svg
                aria-hidden="true"
                className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
                fill="none"
                strokeWidth={2}
                strokeLinecap="round"
              >
                <path
                  d="M0 1H14M0 7H14M0 13H14"
                  className="origin-center transition"
                />
                <path
                  d="M2 2L12 12M12 2L2 12"
                  className="origin-center transition scale-90 opacity-0"
                />
              </svg>
            </button>
          </div>
          <div
            hidden=""
            style={{
              position: "fixed",
              top: 1,
              left: 1,
              width: 1,
              height: 0,
              padding: 0,
              margin: "-1px",
              overflow: "hidden",
              clip: "rect(0, 0, 0, 0)",
              whiteSpace: "nowrap",
              borderWidth: 0,
              display: "none"
            }}
          />
        </div>
      </div>
    </nav>
  </div>
</header>

  )
}

export default Nav