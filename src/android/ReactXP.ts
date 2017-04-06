/**
* ReactXP.ts
*
* Copyright (c) Microsoft Corporation. All rights reserved.
* Licensed under the MIT license.
*
* Wrapper for all ReactXP functionality. Users of ReactXP should import just this
* file instead of internals.
*/

import React = require('react');
import RXInterface = require('../common/Interfaces');
import RXTypes = require('../common/Types');
import AnimatedImpl = require('./Animated');

// -- STRANGE THINGS GOING ON HERE --
// See web/ReactXP.tsx for more details.

import { default as AccessibilityImpl, Accessibility as AccessibilityType } from '../native-common/Accessibility';
import { default as ActivityIndicatorImpl, ActivityIndicator as ActivityIndicatorType } from '../native-common/ActivityIndicator';
import { default as AlertImpl, Alert as AlertType } from '../native-common/Alert';
import { default as AppImpl, App as AppType } from '../native-common/App';
import { default as ButtonImpl, Button as ButtonType } from './Button';
import { default as PickerImpl, Picker as PickerType } from '../native-common/Picker';
import { default as ImageImpl, Image as ImageType } from './Image';
import { default as ClipboardImpl, Clipboard as ClipboardType } from '../native-common/Clipboard';
import { default as GestureViewImpl, GestureView as GestureViewType } from './GestureView';
import { default as ImageSvgImpl, ImageSvg as ImageSvgType } from '../native-common/Svg/ImageSvg';
import { default as InputImpl, Input as InputType } from '../native-common/Input';
import { default as LinkImpl, Link as LinkType } from '../native-common/Link';
import { default as LinkingImpl, Linking as LinkingType } from '../native-common/Linking';
import { default as LocationImpl, Location as LocationType } from '../common/Location';
import { default as ModalImpl, Modal as ModalType } from '../native-common/Modal';
import { default as NavigatorImpl, Navigator as NavigatorType } from '../native-common/Navigator';
import { default as NetworkImpl, Network as NetworkType } from '../native-common/Network';
import { default as PlatformImpl, Platform as PlatformType } from '../native-common/Platform';
import { default as PopupImpl, Popup as PopupType } from '../native-common/Popup';
import { default as ScrollViewImpl, ScrollView as ScrollViewType } from '../native-common/ScrollView';
import { default as StatusBarImpl, StatusBar as StatusBarType } from './StatusBar';
import { default as StorageImpl, Storage as StorageType } from '../native-common/Storage';
import { default as StylesImpl, Styles as StylesType } from '../native-common/Styles';
import { default as SvgPathImpl, SvgPath as SvgPathType } from '../native-common/Svg/SvgPath';
import { default as TextImpl, Text as TextType } from './Text';
import { default as TextInputImpl, TextInput as TextInputType } from '../native-common/TextInput';
import { default as ProfilingImpl, Profiling as ProfilingType } from '../native-common/Profiling';
import { default as UserInterfaceImpl, UserInterface as UserInterfaceType } from '../native-common/UserInterface';
import { default as UserPresenceImpl, UserPresence as UserPresenceType } from '../native-common/UserPresence';
import { default as ViewImpl, View as ViewType } from './View';
import { default as WebViewImpl, WebView as WebViewType } from '../native-common/WebView';
import ViewBase from '../native-common/ViewBase';

// Initialize the Android default view style. This is should not be required because RN for
// Android defaults to overflow 'hidden'. But we are running into issues with removing it
// (probably because it's used for both rendering and layout).
const _defaultViewStyle = StylesImpl.createViewStyle({
    overflow: 'hidden'
});
ViewBase.setDefaultViewStyle(_defaultViewStyle);

// -- STRANGE THINGS GOING ON HERE --
// See web/ReactXP.tsx for more details.

module ReactXP {
    export type Accessibility = AccessibilityType;
    export var Accessibility = AccessibilityImpl;
    export import Animated = AnimatedImpl.Animated;
    export type ActivityIndicator = ActivityIndicatorImpl;
    export var ActivityIndicator = ActivityIndicatorType;
    export type Alert = AlertType;
    export var Alert = AlertImpl;
    export type App = AppType;
    export var App = AppImpl;
    export type Button = ButtonType;
    export var Button = ButtonImpl;
    export type Picker = PickerType;
    export var Picker = PickerImpl;
    export type Clipboard = ClipboardType;
    export var Clipboard = ClipboardImpl;
    export type GestureView = GestureViewType;
    export var GestureView = GestureViewImpl;
    export type Image = ImageType;
    export var Image = ImageImpl;
    export type ImageSvg = ImageSvgType;
    export var ImageSvg = ImageSvgImpl;
    export type Input = InputType;
    export var Input = InputImpl;
    export type Link = LinkType;
    export var Link = LinkImpl;
    export type Linking = LinkingType;
    export var Linking = LinkingImpl;
    export type Location = LocationType;
    export var Location = LocationImpl;
    export type Modal = ModalType;
    export var Modal = ModalImpl;
    export type Navigator = NavigatorType;
    export var Navigator = NavigatorImpl;
    export type Network = NetworkType;
    export var Network = NetworkImpl;
    export type Platform = PlatformType;
    export var Platform = PlatformImpl;
    export type Popup = PopupType;
    export var Popup = PopupImpl;
    export type Profiling = ProfilingType;
    export var Profiling = ProfilingImpl
    export type ScrollView = ScrollViewType;
    export var ScrollView = ScrollViewImpl;
    export type StatusBar = StatusBarType;
    export var StatusBar = StatusBarImpl;
    export type Storage = StorageType;
    export var Storage = StorageImpl;
    export type Styles = StylesType;
    export var Styles = StylesImpl;
    export type SvgPath = SvgPathType;
    export var SvgPath = SvgPathImpl;
    export type Text = TextType;
    export var Text = TextImpl;
    export type TextInput = TextInputType;
    export var TextInput = TextInputImpl;
    export type UserInterface = UserInterfaceType;
    export var UserInterface = UserInterfaceImpl;
    export type UserPresence = UserPresenceType;
    export var UserPresence = UserPresenceImpl;
    export type View = ViewType;
    export var View = ViewImpl;
    export type WebView = WebViewType;
    export var WebView = WebViewImpl;

    export import CommonProps = RXTypes.CommonProps;
    export import CommonStyledProps = RXTypes.CommonStyledProps;
    export import Types = RXTypes;

    export import Component = React.Component;
    export import createElement = React.createElement;
    export import Children = React.Children;
    export var __spread = (React as any).__spread;
    export import DeviceNetworkType = RXInterface.DeviceNetworkType;
};

export = ReactXP;

// -- STRANGE THINGS GOING ON HERE --
// See web/ReactXP.tsx for more details.

/* tslint:disable:no-unused-variable */
var _rxImplementsRxInterface: RXInterface.ReactXP = ReactXP;
/* tslint:enable:no-unused-variable */

/*
var rx = module.exports;
Object.keys(rx)
    .filter(key => rx[key] && rx[key].prototype instanceof React.Component && !rx[key].displayName)
    .forEach(key => rx[key].displayName = 'RX.' + key + '');
*/
