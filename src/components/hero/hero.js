import React, { Component } from "react"
import "./styles/hero.css"
import Navbar from "../navbar/navbar"

export default class Hero extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="hero_content">
          <div className="container">
            <div>
              <h1 className="display1 text-center darkGrey item-hero">
                I Design delightful human experience
              </h1>
            </div>
            <h3 className="display3 text-center darkGrey">
              Breaking down complex problems by making human digital experience
              delightful, easy and fun.
            </h3>
            <img
              src="data:image/svg+xml;base64,PCEtLT94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPy0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgaGVpZ2h0PSI2MiIgd2lkdGg9IjYyIiBzdHlsZT0iIj4KICA8ZGVmcz4KICAgIDxwYXRoIGlkPSJlbGxpcHNlLTEiIG9wYWNpdHk9IjEiIGQ9Ik0wLDMxQTMxLDMxIDAsMSwxIDYyLDMxQTMxLDMxIDAsMSwxIDAsMzEiIGNsYXNzPSJJcVhNenNFel8wIj48L3BhdGg+CiAgICA8bWFzayBpZD0ibWFzay0yIiBtYXNrVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBtYXNrQ29udGVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeD0iMCIgeT0iMCI+CiAgICAgIDxwYXRoIG9wYWNpdHk9IjEiIHdpZHRoPSI2MiIgaGVpZ2h0PSI2MiIgZmlsbD0iYmxhY2siIGQ9Ik0wIDAgTDYyIDAgTDYyIDYyIEwwIDYyIFoiIGNsYXNzPSJJcVhNenNFel8xIj48L3BhdGg+CiAgICAgIDx1c2UgeGxpbms6aHJlZj0iI2VsbGlwc2UtMSIgZmlsbD0id2hpdGUiPjwvdXNlPgogICAgPC9tYXNrPgogICAgPHBhdGggaWQ9InBhdGgtMyIgb3BhY2l0eT0iMSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMjUuNSwyMS41IEwyNS41LDQwLjUgTDQxLDMxLjI1Njc1Njc1Njc1Njc1OCBMMjUuNSwyMS41WiIgY2xhc3M9IklxWE16c0V6XzIiPjwvcGF0aD4KICA8L2RlZnM+CiAgPGcgb3BhY2l0eT0iMSI+CiAgICA8ZyBvcGFjaXR5PSIxIj4KICAgICAgPHVzZSB4bGluazpocmVmPSIjZWxsaXBzZS0xIiBmaWxsLW9wYWNpdHk9IjAiIHN0cm9rZT0icmdiKDUwLDY1LDY2KSIgc3Ryb2tlLW9wYWNpdHk9IjEiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIG1hc2s9InVybCgjbWFzay0yKSI+PC91c2U+CiAgICA8L2c+CiAgICA8ZyBvcGFjaXR5PSIxIj4KICAgICAgPHVzZSB4bGluazpocmVmPSIjcGF0aC0zIiBmaWxsLW9wYWNpdHk9IjAiIHN0cm9rZT0icmdiKDUwLDY1LDY2KSIgc3Ryb2tlLW9wYWNpdHk9IjEiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiPjwvdXNlPgogICAgPC9nPgogIDwvZz4KPHN0eWxlIGRhdGEtbWFkZS13aXRoPSJ2aXZ1cy1pbnN0YW50Ij4uSXFYTXpzRXpfMHtzdHJva2UtZGFzaGFycmF5OjE5NSAxOTc7c3Ryb2tlLWRhc2hvZmZzZXQ6MTk2O2FuaW1hdGlvbjpJcVhNenNFel9kcmF3IDIwMDBtcyBsaW5lYXIgMG1zIGZvcndhcmRzO30uSXFYTXpzRXpfMXtzdHJva2UtZGFzaGFycmF5OjI0OCAyNTA7c3Ryb2tlLWRhc2hvZmZzZXQ6MjQ5O2FuaW1hdGlvbjpJcVhNenNFel9kcmF3IDIwMDBtcyBsaW5lYXIgNTAwbXMgZm9yd2FyZHM7fS5JcVhNenNFel8ye3N0cm9rZS1kYXNoYXJyYXk6NTYgNTg7c3Ryb2tlLWRhc2hvZmZzZXQ6NTc7YW5pbWF0aW9uOklxWE16c0V6X2RyYXcgMjAwMG1zIGxpbmVhciAxMDAwbXMgZm9yd2FyZHM7fUBrZXlmcmFtZXMgSXFYTXpzRXpfZHJhd3sxMDAle3N0cm9rZS1kYXNob2Zmc2V0OjA7fX1Aa2V5ZnJhbWVzIElxWE16c0V6X2ZhZGV7MCV7c3Ryb2tlLW9wYWNpdHk6MTt9OTQuNDQ0NDQ0NDQ0NDQ0NDQle3N0cm9rZS1vcGFjaXR5OjE7fTEwMCV7c3Ryb2tlLW9wYWNpdHk6MDt9fTwvc3R5bGU+PC9zdmc+"
              className="play"
              alt="play button"
            />
          </div>
        </div>
       
      </div>
    )
  }
}
