import React, { createElement, FC, ReactElement, ReactNode, JSXElementConstructor } from 'react'
import { AnyNode, Document, Element } from 'domhandler'
import { getChildren, getName, textContent } from 'domutils'
import serializer from 'dom-serializer'

import { config as defaultConfig } from '../../config/slateToDom/default'
import { Config } from '../../config/slateToDom/types'
import { SlateToDomConfig } from '../..'
import { convertSlate } from '../../utilities/convert-slate'

type SlateToHtml = (node: any[], config?: SlateToDomConfig) => string
type SlateToDom = (node: any[], config?: SlateToDomConfig) => AnyNode | ArrayLike<AnyNode>

interface ISlateToReact {
  node: any[]
  config?: Config
}

export const SlateToReact = ({
  node,
  config = defaultConfig
}: ISlateToReact) => {
  if (!Array.isArray(node)) {
    return <></>
  }
  const document = node.map((n, index) => convertSlate({
    node: n,
    config,
    isLastNodeInDocument: index === node.length - 1,
    transformText: (text) => <>{textContent(text)}</>,
    transformElement: (element) => domElementToReactElement(element),
    wrapChildren: (children) => children
  }))
  //console.log(document)
  return document as any
}

const domElementToReactElement = (element: Element): ReactElement<any, string | JSXElementConstructor<any>> => {
  //console.log(getChildren(element))
  return React.createElement(
  getName(element),
  { className: 'greeting' },
  element.children as any
)
  }
