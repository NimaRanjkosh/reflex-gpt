

import { Fragment, useCallback, useContext, useEffect } from "react"
import { Button as RadixThemesButton, Code as RadixThemesCode, Container as RadixThemesContainer, Flex as RadixThemesFlex, Heading as RadixThemesHeading, IconButton as RadixThemesIconButton, Link as RadixThemesLink, Text as RadixThemesText } from "@radix-ui/themes"
import { ColorModeContext, EventLoopContext } from "$/utils/context"
import { Event, isTrue } from "$/utils/state"
import { Moon as LucideMoon, Sun as LucideSun } from "lucide-react"
import { Link as ReactRouterLink } from "react-router"
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

function Iconbutton_54484911338602490313673946852294588743 () {
  
  const { toggleColorMode } = useContext(ColorModeContext)
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_9922dd3e837b9e087c86a2522c2c93f8 = useCallback(toggleColorMode, [addEvents, Event, toggleColorMode])



  
  return (
    jsx(
RadixThemesIconButton,
{css:({ ["padding"] : "6px", ["position"] : "fixed", ["top"] : "2rem", ["right"] : "2rem", ["background"] : "transparent", ["color"] : "inherit", ["zIndex"] : "20", ["&:hover"] : ({ ["cursor"] : "pointer" }) }),onClick:on_click_9922dd3e837b9e087c86a2522c2c93f8},
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
jsx(Iconbutton_54484911338602490313673946852294588743,{},)
,jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",css:({ ["minHeight"] : "85vh" }),direction:"column",justify:"center",gap:"5"},
jsx(
RadixThemesHeading,
{size:"9"},
"Welcome to Reflex!"
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
"title",
{},
"ReflexGpt | Index"
,),jsx("meta",{content:"favicon.ico",property:"og:image"},)
,)
  )
}
