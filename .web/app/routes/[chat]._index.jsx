

import { Fragment, useCallback, useContext, useEffect } from "react"
import { Box as RadixThemesBox, Button as RadixThemesButton, Code as RadixThemesCode, Container as RadixThemesContainer, DropdownMenu as RadixThemesDropdownMenu, Flex as RadixThemesFlex, Heading as RadixThemesHeading, Link as RadixThemesLink, Separator as RadixThemesSeparator, Text as RadixThemesText, TextArea as RadixThemesTextArea } from "@radix-ui/themes"
import { Link as ReactRouterLink } from "react-router"
import { Facebook as LucideFacebook, Instagram as LucideInstagram, Linkedin as LucideLinkedin, Menu as LucideMenu, Twitter as LucideTwitter } from "lucide-react"
import { ColorModeContext, EventLoopContext, StateContexts } from "$/utils/context"
import { Event, getRefValue, getRefValues, isTrue } from "$/utils/state"
import ReactMarkdown from "react-markdown"
import "katex/dist/katex.min.css"
import remarkMath from "remark-math"
import remarkGfm from "remark-gfm"
import remarkUnwrapImages from "remark-unwrap-images"
import rehypeKatex from "rehype-katex"
import rehypeRaw from "rehype-raw"
import { PrismAsyncLight as SyntaxHighlighter } from "react-syntax-highlighter"
import oneLight from "react-syntax-highlighter/dist/esm/styles/prism/one-light"
import oneDark from "react-syntax-highlighter/dist/esm/styles/prism/one-dark"
import { Root as RadixFormRoot } from "@radix-ui/react-form"
import { jsx } from "@emotion/react"



        function ComponentMap_a5553a20fba0d7498da9ba7265557b15 () {
            
  const { resolvedColorMode } = useContext(ColorModeContext)



            return (
                ({ ["h1"] : (({node, children, ...props}) => (jsx(RadixThemesHeading,{as:"h1",css:({ ["marginTop"] : "0.5em", ["marginBottom"] : "0.5em" }),size:"6",...props},children,))), ["h2"] : (({node, children, ...props}) => (jsx(RadixThemesHeading,{as:"h2",css:({ ["marginTop"] : "0.5em", ["marginBottom"] : "0.5em" }),size:"5",...props},children,))), ["h3"] : (({node, children, ...props}) => (jsx(RadixThemesHeading,{as:"h3",css:({ ["marginTop"] : "0.5em", ["marginBottom"] : "0.5em" }),size:"4",...props},children,))), ["h4"] : (({node, children, ...props}) => (jsx(RadixThemesHeading,{as:"h4",css:({ ["marginTop"] : "0.5em", ["marginBottom"] : "0.5em" }),size:"3",...props},children,))), ["h5"] : (({node, children, ...props}) => (jsx(RadixThemesHeading,{as:"h5",css:({ ["marginTop"] : "0.5em", ["marginBottom"] : "0.5em" }),size:"2",...props},children,))), ["h6"] : (({node, children, ...props}) => (jsx(RadixThemesHeading,{as:"h6",css:({ ["marginTop"] : "0.5em", ["marginBottom"] : "0.5em" }),size:"1",...props},children,))), ["p"] : (({node, children, ...props}) => (jsx(RadixThemesText,{as:"p",css:({ ["marginTop"] : "1em", ["marginBottom"] : "1em" }),...props},children,))), ["ul"] : (({node, children, ...props}) => (jsx("ul",{css:({ ["listStyleType"] : "disc", ["marginTop"] : "1em", ["marginBottom"] : "1em", ["marginLeft"] : "1.5rem", ["direction"] : "column" })},children,))), ["ol"] : (({node, children, ...props}) => (jsx("ol",{css:({ ["listStyleType"] : "decimal", ["marginTop"] : "1em", ["marginBottom"] : "1em", ["marginLeft"] : "1.5rem", ["direction"] : "column" })},children,))), ["li"] : (({node, children, ...props}) => (jsx("li",{css:({ ["marginTop"] : "0.5em", ["marginBottom"] : "0.5em" })},children,))), ["a"] : (({node, children, ...props}) => (jsx(RadixThemesLink,{css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) }),href:"#",...props},children,))), ["code"] : (({node, inline, className, children, ...props}) => { const match = (className || '').match(/language-(?<lang>.*)/); let _language = match ? match[1] : '';  ;             return inline ? (                 jsx(RadixThemesCode,{...props},children,)             ) : (                 jsx(SyntaxHighlighter,{children:((Array.isArray(children)) ? children.join("\n") : children),css:({ ["marginTop"] : "1em", ["marginBottom"] : "1em" }),language:_language,style:((resolvedColorMode === "light") ? oneLight : oneDark),wrapLongLines:true,...props},)             );         }) })
            )
        }
        

function Root_67307579233438140451645407764231573661 () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  
    const handleSubmit_2d071313ff21dcbd4ec2d5efd479ec0a = useCallback((ev) => {
        const $form = ev.target
        ev.preventDefault()
        const form_data = {...Object.fromEntries(new FormData($form).entries()), ...({  })};

        (((...args) => (addEvents([(Event("reflex___state____state.reflex_gpt___chat___state____chat_state.handling_submit", ({ ["form_data"] : form_data }), ({  })))], args, ({  }))))(ev));

        if (true) {
            $form.reset()
        }
    })
    




  
  return (
    jsx(
RadixFormRoot,
{className:"Root ",css:({ ["width"] : "100%" }),onSubmit:handleSubmit_2d071313ff21dcbd4ec2d5efd479ec0a},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",direction:"column",gap:"3"},
jsx(RadixThemesTextArea,{css:({ ["& textarea"] : null, ["width"] : "100%" }),name:"message",placeholder:"Your message",required:true},)
,jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",direction:"row",gap:"3"},
jsx(
RadixThemesButton,
{type:"submit"},
"Submit"
,),jsx(Fragment_114065205177711263837194906430059584370,{},)
,),),)
  )
}

function Dropdownmenu__item_78259143428191714580501905205005467293 () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_2c894a0ac7061de32d1bc4170d98a2b5 = useCallback(((_e) => (addEvents([(Event("reflex___state____state.reflex_gpt___navigation___state____nav_state.to_chat", ({  }), ({  })))], [_e], ({  })))), [addEvents, Event])



  
  return (
    jsx(
RadixThemesDropdownMenu.Item,
{onClick:on_click_2c894a0ac7061de32d1bc4170d98a2b5},
"Chat"
,)
  )
}

function Dropdownmenu__item_160771094599294285760928589324466380096 () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_59474374dc8dcb82b24118c65f912003 = useCallback(((_e) => (addEvents([(Event("reflex___state____state.reflex_gpt___navigation___state____nav_state.to_about_us", ({  }), ({  })))], [_e], ({  })))), [addEvents, Event])



  
  return (
    jsx(
RadixThemesDropdownMenu.Item,
{onClick:on_click_59474374dc8dcb82b24118c65f912003},
"About"
,)
  )
}

function Fragment_114065205177711263837194906430059584370 () {
  
  const reflex___state____state__reflex_gpt___chat___state____chat_state = useContext(StateContexts.reflex___state____state__reflex_gpt___chat___state____chat_state)





  
  return (
    jsx(
Fragment,
{},
(reflex___state____state__reflex_gpt___chat___state____chat_state.user_did_submit_rx_state_ ? (jsx(
Fragment,
{},
jsx(
RadixThemesText,
{as:"p"},
"Submitted"
,),)) : (jsx(Fragment,{},)
)),)
  )
}

function Dropdownmenu__item_24723954489570581789777515458957729503 () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_65dc12a5fb3b1a2fddc7ded837f9fe42 = useCallback(((_e) => (addEvents([(Event("reflex___state____state.reflex_gpt___navigation___state____nav_state.to_home", ({  }), ({  })))], [_e], ({  })))), [addEvents, Event])



  
  return (
    jsx(
RadixThemesDropdownMenu.Item,
{onClick:on_click_65dc12a5fb3b1a2fddc7ded837f9fe42},
"Home"
,)
  )
}

function Box_321334580220991759214020664813109939629 () {
  
  const reflex___state____state__reflex_gpt___chat___state____chat_state = useContext(StateContexts.reflex___state____state__reflex_gpt___chat___state____chat_state)





  
  return (
    jsx(
RadixThemesBox,
{css:({ ["width"] : "100%" })},
reflex___state____state__reflex_gpt___chat___state____chat_state.messages_rx_state_.map((chat_message_rx_state_,index_52e0d297ad548946)=>(jsx(
RadixThemesBox,
{css:({ ["width"] : "100%" }),key:index_52e0d297ad548946},
jsx(
RadixThemesBox,
{css:({ ["textAlign"] : (chat_message_rx_state_["is_bot"] ? "left" : "right"), ["marginTop"] : "1em" })},
jsx(
ReactMarkdown,
{components:ComponentMap_a5553a20fba0d7498da9ba7265557b15(),css:({ ["backgroundColor"] : (chat_message_rx_state_["is_bot"] ? "var(--mauve-4)" : "var(--blue-4)"), ["color"] : (chat_message_rx_state_["is_bot"] ? "var(--mauve-12)" : "var(--blue-12)"), ["display"] : "inline-block", ["padding"] : "1em", ["borderRadius"] : "8px", ["@media screen and (min-width: 0)"] : ({ ["maxWidth"] : "30em" }), ["@media screen and (min-width: 30em)"] : ({ ["maxWidth"] : "30em" }), ["@media screen and (min-width: 48em)"] : ({ ["maxWidth"] : "50em" }), ["@media screen and (min-width: 62em)"] : ({ ["maxWidth"] : "50em" }), ["@media screen and (min-width: 80em)"] : ({ ["maxWidth"] : "50em" }), ["@media screen and (min-width: 96em)"] : ({ ["maxWidth"] : "50em" }) }),rehypePlugins:[rehypeKatex, rehypeRaw],remarkPlugins:[remarkMath, remarkGfm, remarkUnwrapImages]},
chat_message_rx_state_["message"]
,),),))),)
  )
}

export default function Component() {
    




  return (
    jsx(
Fragment,
{},
jsx(
RadixThemesContainer,
{css:({ ["padding"] : "16px" }),size:"3"},
jsx(
RadixThemesBox,
{css:({ ["background"] : "var(--accent-3)", ["padding"] : "1em", ["width"] : "100%" })},
jsx(
RadixThemesBox,
{css:({ ["@media screen and (min-width: 0)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 30em)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 48em)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 62em)"] : ({ ["display"] : "block" }) })},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",css:({ ["alignItems"] : "center" }),direction:"row",justify:"between",gap:"3"},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",css:({ ["alignItems"] : "center" }),direction:"row",gap:"3"},
jsx("img",{css:({ ["width"] : "2.25em", ["height"] : "auto", ["borderRadius"] : "25%" }),src:"/logo.jpg"},)
,jsx(
RadixThemesHeading,
{size:"7",weight:"bold"},
"Reflex GPT"
,),),jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",direction:"row",justify:"end",gap:"5"},
jsx(
RadixThemesLink,
{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},
jsx(
ReactRouterLink,
{to:"/"},
jsx(
RadixThemesText,
{as:"p",size:"4",weight:"medium"},
"Home"
,),),),jsx(
RadixThemesLink,
{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},
jsx(
ReactRouterLink,
{to:"/about"},
jsx(
RadixThemesText,
{as:"p",size:"4",weight:"medium"},
"About"
,),),),jsx(
RadixThemesLink,
{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},
jsx(
ReactRouterLink,
{to:"/chat"},
jsx(
RadixThemesText,
{as:"p",size:"4",weight:"medium"},
"Chat"
,),),),),),),jsx(
RadixThemesBox,
{css:({ ["@media screen and (min-width: 0)"] : ({ ["display"] : "block" }), ["@media screen and (min-width: 30em)"] : ({ ["display"] : "block" }), ["@media screen and (min-width: 48em)"] : ({ ["display"] : "block" }), ["@media screen and (min-width: 62em)"] : ({ ["display"] : "none" }) })},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",css:({ ["alignItems"] : "center" }),direction:"row",justify:"between",gap:"3"},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",css:({ ["alignItems"] : "center" }),direction:"row",gap:"3"},
jsx("img",{css:({ ["width"] : "2em", ["height"] : "auto", ["borderRadius"] : "25%" }),src:"/logo.jpg"},)
,jsx(
RadixThemesHeading,
{size:"6",weight:"bold"},
"Reflex GPT"
,),),jsx(
RadixThemesDropdownMenu.Root,
{css:({ ["justify"] : "end" })},
jsx(
RadixThemesDropdownMenu.Trigger,
{},
jsx(LucideMenu,{size:30},)
,),jsx(
RadixThemesDropdownMenu.Content,
{},
jsx(Dropdownmenu__item_24723954489570581789777515458957729503,{},)
,jsx(Dropdownmenu__item_160771094599294285760928589324466380096,{},)
,jsx(Dropdownmenu__item_78259143428191714580501905205005467293,{},)
,),),),),),jsx(
Fragment,
{},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",css:({ ["margin"] : "3rem auto", ["minHeight"] : "85vh" }),direction:"column",justify:"center",gap:"5"},
jsx(
RadixThemesHeading,
{size:"9"},
"Chat here!"
,),jsx(Box_321334580220991759214020664813109939629,{},)
,jsx(Root_67307579233438140451645407764231573661,{},)
,),),jsx(
"footer",
{css:({ ["width"] : "100%" })},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"column",gap:"5"},
jsx(
RadixThemesFlex,
{css:({ ["@media screen and (min-width: 0)"] : ({ ["flexDirection"] : "column" }), ["@media screen and (min-width: 30em)"] : ({ ["flexDirection"] : "column" }), ["@media screen and (min-width: 48em)"] : ({ ["flexDirection"] : "row" }), ["width"] : "100%" }),justify:"between",gap:"6"},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",css:({ ["@media screen and (min-width: 0)"] : ({ ["alignItems"] : "center" }), ["@media screen and (min-width: 30em)"] : ({ ["alignItems"] : "center" }), ["@media screen and (min-width: 48em)"] : ({ ["alignItems"] : "start" }) }),direction:"column",gap:"4"},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",css:({ ["alignItems"] : "center" }),direction:"row",gap:"3"},
jsx("img",{css:({ ["width"] : "2.25em", ["height"] : "auto", ["borderRadius"] : "25%" }),src:"/logo.jpg"},)
,jsx(
RadixThemesHeading,
{size:"7",weight:"bold"},
"Reflex"
,),),jsx(
RadixThemesText,
{as:"p",css:({ ["whiteSpace"] : "nowrap" }),size:"3",weight:"medium"},
"\u00a9 2024 Reflex, Inc"
,),),jsx(
RadixThemesFlex,
{css:({ ["@media screen and (min-width: 0)"] : ({ ["textAlign"] : "center" }), ["@media screen and (min-width: 30em)"] : ({ ["textAlign"] : "center" }), ["@media screen and (min-width: 48em)"] : ({ ["textAlign"] : "start" }), ["flexDirection"] : "column" }),gap:"4"},
jsx(
RadixThemesHeading,
{as:"h3",size:"4",weight:"bold"},
"PRODUCTS"
,),jsx(
RadixThemesLink,
{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},
jsx(
ReactRouterLink,
{to:"/#"},
jsx(
RadixThemesText,
{as:"p",size:"3"},
"Web Design"
,),),),jsx(
RadixThemesLink,
{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},
jsx(
ReactRouterLink,
{to:"/#"},
jsx(
RadixThemesText,
{as:"p",size:"3"},
"Web Development"
,),),),jsx(
RadixThemesLink,
{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},
jsx(
ReactRouterLink,
{to:"/#"},
jsx(
RadixThemesText,
{as:"p",size:"3"},
"E-commerce"
,),),),jsx(
RadixThemesLink,
{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},
jsx(
ReactRouterLink,
{to:"/#"},
jsx(
RadixThemesText,
{as:"p",size:"3"},
"Content Management"
,),),),jsx(
RadixThemesLink,
{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},
jsx(
ReactRouterLink,
{to:"/#"},
jsx(
RadixThemesText,
{as:"p",size:"3"},
"Mobile Apps"
,),),),),jsx(
RadixThemesFlex,
{css:({ ["@media screen and (min-width: 0)"] : ({ ["textAlign"] : "center" }), ["@media screen and (min-width: 30em)"] : ({ ["textAlign"] : "center" }), ["@media screen and (min-width: 48em)"] : ({ ["textAlign"] : "start" }), ["flexDirection"] : "column" }),gap:"4"},
jsx(
RadixThemesHeading,
{as:"h3",size:"4",weight:"bold"},
"RESOURCES"
,),jsx(
RadixThemesLink,
{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},
jsx(
ReactRouterLink,
{to:"/#"},
jsx(
RadixThemesText,
{as:"p",size:"3"},
"Blog"
,),),),jsx(
RadixThemesLink,
{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},
jsx(
ReactRouterLink,
{to:"/#"},
jsx(
RadixThemesText,
{as:"p",size:"3"},
"Case Studies"
,),),),jsx(
RadixThemesLink,
{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},
jsx(
ReactRouterLink,
{to:"/#"},
jsx(
RadixThemesText,
{as:"p",size:"3"},
"Whitepapers"
,),),),jsx(
RadixThemesLink,
{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},
jsx(
ReactRouterLink,
{to:"/#"},
jsx(
RadixThemesText,
{as:"p",size:"3"},
"Webinars"
,),),),jsx(
RadixThemesLink,
{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},
jsx(
ReactRouterLink,
{to:"/#"},
jsx(
RadixThemesText,
{as:"p",size:"3"},
"E-books"
,),),),),),jsx(RadixThemesSeparator,{size:"4"},)
,jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"row",justify:"between",gap:"3"},
jsx(
RadixThemesFlex,
{align:"center",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"row",gap:"4"},
jsx(
RadixThemesLink,
{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},
jsx(
ReactRouterLink,
{to:"/#"},
jsx(
RadixThemesText,
{as:"p",size:"3"},
"Privacy Policy"
,),),),jsx(
RadixThemesLink,
{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},
jsx(
ReactRouterLink,
{to:"/#"},
jsx(
RadixThemesText,
{as:"p",size:"3"},
"Terms of Service"
,),),),),jsx(
RadixThemesFlex,
{css:({ ["width"] : "100%" }),justify:"end",gap:"3"},
jsx(
RadixThemesLink,
{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},
jsx(
ReactRouterLink,
{to:"/#"},
jsx(LucideInstagram,{},)
,),),jsx(
RadixThemesLink,
{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},
jsx(
ReactRouterLink,
{to:"/#"},
jsx(LucideTwitter,{},)
,),),jsx(
RadixThemesLink,
{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},
jsx(
ReactRouterLink,
{to:"/#"},
jsx(LucideFacebook,{},)
,),),jsx(
RadixThemesLink,
{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},
jsx(
ReactRouterLink,
{to:"/#"},
jsx(LucideLinkedin,{},)
,),),),),),),),jsx(
"title",
{},
"ReflexGpt | Chat"
,),jsx("meta",{content:"favicon.ico",property:"og:image"},)
,)
  )
}
