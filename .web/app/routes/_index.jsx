

import { Fragment, useCallback, useContext, useEffect } from "react"
import { Box as RadixThemesBox, Button as RadixThemesButton, Code as RadixThemesCode, Container as RadixThemesContainer, DropdownMenu as RadixThemesDropdownMenu, Flex as RadixThemesFlex, Heading as RadixThemesHeading, IconButton as RadixThemesIconButton, Link as RadixThemesLink, Separator as RadixThemesSeparator, Text as RadixThemesText } from "@radix-ui/themes"
import { Link as ReactRouterLink } from "react-router"
import { Facebook as LucideFacebook, Instagram as LucideInstagram, Linkedin as LucideLinkedin, Menu as LucideMenu, Moon as LucideMoon, Sun as LucideSun, Twitter as LucideTwitter } from "lucide-react"
import { ColorModeContext, EventLoopContext } from "$/utils/context"
import { Event, isTrue } from "$/utils/state"
import { jsx } from "@emotion/react"



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

function Iconbutton_37756489123930725173988118574398723960 () {
  
  const { toggleColorMode } = useContext(ColorModeContext)
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_9922dd3e837b9e087c86a2522c2c93f8 = useCallback(toggleColorMode, [addEvents, Event, toggleColorMode])



  
  return (
    jsx(
RadixThemesIconButton,
{css:({ ["padding"] : "6px", ["position"] : "fixed", ["bottom"] : "2rem", ["right"] : "2rem", ["background"] : "transparent", ["color"] : "inherit", ["zIndex"] : "20", ["&:hover"] : ({ ["cursor"] : "pointer" }) }),onClick:on_click_9922dd3e837b9e087c86a2522c2c93f8},
jsx(Fragment_316481211133211762242431592816873109377,{},)
,)
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

function Fragment_316481211133211762242431592816873109377 () {
  
  const { resolvedColorMode } = useContext(ColorModeContext)





  
  return (
    jsx(
Fragment,
{},
((resolvedColorMode === "light") ? (jsx(
Fragment,
{},
jsx(LucideSun,{},)
,)) : (jsx(
Fragment,
{},
jsx(LucideMoon,{},)
,))),)
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
jsx(Iconbutton_37756489123930725173988118574398723960,{},)
,jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",css:({ ["minHeight"] : "85vh" }),direction:"column",justify:"center",gap:"5"},
jsx(
RadixThemesHeading,
{size:"9"},
"Welcome to Reflex GPT!"
,),jsx(
RadixThemesText,
{as:"p",size:"5"},
"Get started by editing "
,jsx(
RadixThemesCode,
{},
"reflex_gpt/reflex_gpt.py"
,),),jsx(
RadixThemesLink,
{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},
jsx(
ReactRouterLink,
{target:(true ? "_blank" : ""),to:"https://reflex.dev/docs/getting-started/introduction/"},
jsx(
RadixThemesButton,
{},
"Check out our docs!"
,),),),),),jsx(
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
"ReflexGpt | Index"
,),jsx("meta",{content:"favicon.ico",property:"og:image"},)
,)
  )
}
