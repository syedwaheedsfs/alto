import { makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import { Link as RouterLink } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import {ListItemText} from "@material-ui/core";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Hidden from "@material-ui/core/Hidden";
import clsx from "clsx"; 
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { SwipeableDrawer} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";
import {
  ListItemIcon,
  ListSubheader,
  Collapse,
} from "@material-ui/core";
import ExpandMore from "@material-ui/icons/ExpandMore";
import ChevronRightOutlinedIcon from "@material-ui/icons/ChevronRightOutlined";
import { useHistory } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link} from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import InputBase from "@material-ui/core/InputBase";
import CancelIcon from "@material-ui/icons/Cancel";
import {useEffect } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useRef } from "react";
export const dynamicimports = {
  makeStyles,
  Typography,
  List,
  ListItem,
  Box,
  Container,
  RouterLink,
  Grid,
  Card,
  CardContent,
  Divider,
  ListItemText,
  useState,
  useParams,
  Hidden,
  clsx,
  IconButton,
  MenuIcon,
  useMediaQuery,
  useTheme,
  AppBar,
  Toolbar,
  Button,
  Paper,
  SearchIcon,
  SwipeableDrawer,
  React,
  ListItemIcon,
  ListSubheader,
  Collapse,
  ExpandMore,
  ChevronRightOutlinedIcon,
  useHistory,
  Router,
  Switch,
  Route,
  Link,
  Dialog,
  InputBase,
  CancelIcon,
  useEffect,
  CircularProgress,
  useRef,
};