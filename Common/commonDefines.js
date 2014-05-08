﻿"use strict";

var g_bDate1904 = false;

var CellValueType = 
{
	Number:0,
	String:1,	
	Bool:2,
	Error:3
};

//NumFormat defines
var c_oAscNumFormatType = {
	General : 0,
	Custom : 1,
	Text : 2,
	Number : 3,
	Integer : 4,
	Scientific : 5,
	Currency : 6,
	Date : 7,
	Time : 8,
	Percent : 9,
	Fraction : 10
};



 var c_oAscChartLegend = {
	left: "left",
	right: "right",
	top: "top",
	bottom: "bottom"
 };
 
 var c_oAscDrawingLayerType = {
	BringToFront: 0,
	SendToBack: 1,
	BringForward: 2,
	SendBackward: 3
 };
 


var	c_oAscTransactionState = { 
	No: -1,
	Start: 0,
	Stop: 1
};
						
var c_oAscCellAnchorType = {
	cellanchorAbsolute:  0,
	cellanchorOneCell:  1,
	cellanchorTwoCell:  2
};

var c_oAscChartDefines = {
	defaultChartWidth: 478,
	defaultChartHeight: 286
};

var c_oAscLineDrawingRule = {
    Left   : 0,
    Center : 1,
    Right  : 2,
    Top    : 0,
    Bottom : 2
};

var align_Right   = 0;
var align_Left    = 1;
var align_Center  = 2;
var align_Justify = 3;


var linerule_AtLeast = 0;
var linerule_Auto    = 1;
var linerule_Exact   = 2;

var shd_Clear = 0;
var shd_Nil   = 1;

var vertalign_Baseline    = 0;
var vertalign_SuperScript = 1;
var vertalign_SubScript   = 2;
var hdrftr_Header = 0x01;
var hdrftr_Footer = 0x02;


var c_oAscChartTitleShowSettings =
{
    none: 0,
    overlay: 1,
    noOverlay: 2
};

var c_oAscChartHorAxisLabelShowSettings =
{
    none: 0,
    noOverlay: 1
};


var c_oAscChartVertAxisLabelShowSettings =
{
    none: 0,
    rotated: 1,
    vertical: 2,
    horizontal: 3
};

var c_oAscChartLegendShowSettings =
{
    none: 0,
    left: 1,
    top: 2,
    right: 3,
    bottom: 4,
    leftOverlay: 5,
    rightOverlay: 6,
    layout: 7
};

var c_oAscChartDataLabelsPos =
{
    none: 0,
    b: 1,
    bestFit: 2,
    ctr: 3,
    inBase: 4,
    inEnd: 5,
    l: 6,
    outEnd: 7,
    r: 8,
    t: 9
};

var c_oAscChartCatAxisSettings =
{
    none: 0,
    leftToRight: 1,
    rightToLeft: 2,
    noLabels: 3
};

var c_oAscChartValAxisSettings =
{
    none: 0,
    byDefault: 1,
    thousands: 2,
    millions: 3,
    billions: 4,
    log: 5
};

var c_oAscAxisTypeSettings =
{
    vert: 0,
    hor: 1
};

var c_oAscGridLinesSettings =
{
    none: 0,
    major: 1,
    minor: 2,
    majorMinor: 3
};


var c_oAscChartTypeSettings =
{
    barNormal           : 0,
    barStacked          : 1,
    barStackedPer       : 2,
    lineNormal          : 3,
    lineStacked         : 4,
    lineStackedPer      : 5,
    lineNormalMarker    : 6,
    lineStackedMarker   : 7,
    lineStackedPerMarker: 8,
    pie                 : 9,
    hBarNormal          : 10,
    hBarStacked         : 11,
    hBarStackedPer      : 12,
    areaNormal          : 13,
    areaStacked         : 14,
    areaStackedPer      : 15,
    doughnut            : 16,
    stock               : 17,
    scatter             : 18,
    scatterLine         : 19,
    scatterLineMarker   : 20,
    scatterMarker       : 21,
    scatterNone         : 22,
    scatterSmooth       : 23,
    scatterSmoothMarker : 24,
    unknown: 25
};


var c_oAscValAxisRule =
{
    auto:0,
    fixed:1
};

var c_oAscValAxUnits =
{
    none:0,
    BILLIONS: 1,
    HUNDRED_MILLIONS: 2,
    HUNDREDS: 3,
    HUNDRED_THOUSANDS: 4,
    MILLIONS: 5,
    TEN_MILLIONS: 6,
    TEN_THOUSANDS: 7,
    TRILLIONS: 8,
    CUSTOM: 9
};

var c_oAscTickMark =
{
    TICK_MARK_CROSS: 0,
    TICK_MARK_IN: 1,
    TICK_MARK_NONE: 2,
    TICK_MARK_OUT: 3
};

var c_oAscTickLabelsPos =
{
    TICK_LABEL_POSITION_HIGH:0,
    TICK_LABEL_POSITION_LOW:    1,
    TICK_LABEL_POSITION_NEXT_TO:  2,
    TICK_LABEL_POSITION_NONE    :  3
};

var c_oAscCrossesRule =
{
    auto:0,
    maxValue: 1,
    value: 2,
    minValue: 3
};

var c_oAscHorAxisType =
{
    auto: 0,
    date: 1,
    text: 2
};

var c_oAscBetweenLabelsRule =
{
    auto: 0,
    manual: 1
};

var c_oAscLabelsPosition =
{
    byDivisions: 0,
    betweenDivisions: 1
};


var c_oAscAxisType =
{
    auto: 0,
    date: 1,
    text: 2,
    cat : 3,
    val : 4
};

var c_oAscHAnchor = {
    Margin: 0x00,
    Page: 0x01,
    Text: 0x02,

    PageInternal: 0xFF // только для внутреннего использования
};

var c_oAscXAlign = {
    Center: 0x00,
    Inside: 0x01,
    Left: 0x02,
    Outside: 0x03,
    Right: 0x04
};
var c_oAscYAlign = {
    Bottom: 0x00,
    Center: 0x01,
    Inline: 0x02,
    Inside: 0x03,
    Outside: 0x04,
    Top: 0x05
};

var c_oAscVAnchor = {
    Margin: 0x00,
    Page: 0x01,
    Text: 0x02
};

var c_oAscRelativeFromH = {
    Character: 0x00,
    Column: 0x01,
    InsideMargin: 0x02,
    LeftMargin: 0x03,
    Margin: 0x04,
    OutsideMargin: 0x05,
    Page: 0x06,
    RightMargin: 0x07
};

var c_oAscRelativeFromV = {
    BottomMargin: 0x00,
    InsideMargin: 0x01,
    Line: 0x02,
    Margin: 0x03,
    OutsideMargin: 0x04,
    Page: 0x05,
    Paragraph: 0x06,
    TopMargin: 0x07
};

// image wrap style
var c_oAscWrapStyle = {
	Inline:0,
	Flow : 1
};