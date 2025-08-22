

import { Fragment, useCallback, useContext, useEffect } from "react"
import { Box as RadixThemesBox, Container as RadixThemesContainer, DropdownMenu as RadixThemesDropdownMenu, Flex as RadixThemesFlex, Heading as RadixThemesHeading, IconButton as RadixThemesIconButton, Link as RadixThemesLink, Separator as RadixThemesSeparator, Text as RadixThemesText } from "@radix-ui/themes"
import { Link as ReactRouterLink } from "react-router"
import { Facebook as LucideFacebook, Instagram as LucideInstagram, Linkedin as LucideLinkedin, Menu as LucideMenu, Moon as LucideMoon, Sun as LucideSun, Twitter as LucideTwitter } from "lucide-react"
import { ColorModeContext, EventLoopContext } from "$/utils/context"
import { Event, isTrue } from "$/utils/state"
import { jsx } from "@emotion/react"



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

function Link_185971520537207162323604121356663882425 () {
  
  const { resolvedColorMode } = useContext(ColorModeContext)





  
  return (
    jsx(
RadixThemesLink,
{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) }),size:"3"},
jsx(
ReactRouterLink,
{to:"https://reflex.dev"},
jsx(
RadixThemesFlex,
{align:"center",className:"rx-Stack",css:({ ["textAlign"] : "center", ["padding"] : "1em" }),direction:"row",gap:"3"},
"Built with "
,jsx(
"svg",
{"aria-label":"Reflex",css:({ ["fill"] : ((resolvedColorMode === "light") ? "#110F1F" : "white") }),height:"12",role:"img",width:"56",xmlns:"http://www.w3.org/2000/svg"},
jsx("path",{d:"M0 11.5999V0.399902H8.96V4.8799H6.72V2.6399H2.24V4.8799H6.72V7.1199H2.24V11.5999H0ZM6.72 11.5999V7.1199H8.96V11.5999H6.72Z"},)
,jsx("path",{d:"M11.2 11.5999V0.399902H17.92V2.6399H13.44V4.8799H17.92V7.1199H13.44V9.3599H17.92V11.5999H11.2Z"},)
,jsx("path",{d:"M20.16 11.5999V0.399902H26.88V2.6399H22.4V4.8799H26.88V7.1199H22.4V11.5999H20.16Z"},)
,jsx("path",{d:"M29.12 11.5999V0.399902H31.36V9.3599H35.84V11.5999H29.12Z"},)
,jsx("path",{d:"M38.08 11.5999V0.399902H44.8V2.6399H40.32V4.8799H44.8V7.1199H40.32V9.3599H44.8V11.5999H38.08Z"},)
,jsx("path",{d:"M47.04 4.8799V0.399902H49.28V4.8799H47.04ZM53.76 4.8799V0.399902H56V4.8799H53.76ZM49.28 7.1199V4.8799H53.76V7.1199H49.28ZM47.04 11.5999V7.1199H49.28V11.5999H47.04ZM53.76 11.5999V7.1199H56V11.5999H53.76Z"},)
,jsx(
"title",
{},
"Reflex"
,),),),),)
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
"Welcome to About Us!"
,),),jsx(
RadixThemesFlex,
{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "100%" })},
jsx(Link_185971520537207162323604121356663882425,{},)
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
"ReflexGpt | About"
,),jsx("meta",{content:"favicon.ico",property:"og:image"},)
,)
  )
}
