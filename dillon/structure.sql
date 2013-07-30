-- phpMyAdmin SQL Dump
-- version 3.4.10.1deb1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jul 30, 2013 at 11:41 AM
-- Server version: 5.5.32
-- PHP Version: 5.3.10-1ubuntu3.7

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `test`
--

-- --------------------------------------------------------

--
-- Table structure for table `dfm_message_txns`
--

CREATE TABLE IF NOT EXISTS `dfm_message_txns` (
  `sender_id` varchar(25) NOT NULL,
  `receiver_id` varchar(25) NOT NULL,
  `webit_id` varchar(25) NOT NULL,
  `send_datetime` datetime NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `dfm_people`
--

CREATE TABLE IF NOT EXISTS `dfm_people` (
  `person_id` varchar(25) NOT NULL,
  `group_id` varchar(28) DEFAULT NULL,
  `story` varchar(255) NOT NULL,
  `picurl` varchar(255) DEFAULT NULL,
  `emailaddr` varchar(84) DEFAULT NULL,
  `facebookid` varchar(36) DEFAULT NULL,
  `twitterid` varchar(36) DEFAULT NULL,
  `googleid` varchar(36) DEFAULT NULL,
  `last_contact` datetime NOT NULL,
  PRIMARY KEY (`person_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `dfm_posts`
--

CREATE TABLE IF NOT EXISTS `dfm_posts` (
  `webit_id` varchar(150) NOT NULL,
  `owner_id` varchar(25) NOT NULL,
  `cat` varchar(15) NOT NULL,
  `subcat` varchar(25) NOT NULL,
  `story` text NOT NULL,
  `twdate` datetime NOT NULL,
  `picurl` varchar(255) NOT NULL,
  `linkurl` varchar(255) NOT NULL,
  `embedurl` varchar(255) NOT NULL,
  `where_at` varchar(25) NOT NULL,
  `where_in` varchar(25) NOT NULL,
  `change_date` datetime NOT NULL,
  PRIMARY KEY (`webit_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `dfm_products`
--

CREATE TABLE IF NOT EXISTS `dfm_products` (
  `webit_id` varchar(12) NOT NULL,
  `provider_id` varchar(28) NOT NULL,
  `prodid` varchar(12) NOT NULL,
  `price` int(6) NOT NULL,
  `story` varchar(255) NOT NULL,
  `picurl` varchar(255) NOT NULL,
  `linkurl` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `dfm_providers`
--

CREATE TABLE IF NOT EXISTS `dfm_providers` (
  `provider_id` varchar(48) NOT NULL,
  `story` varchar(255) NOT NULL,
  `picurl` varchar(255) NOT NULL,
  `linkurl` varchar(255) NOT NULL,
  PRIMARY KEY (`provider_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `dfm_tweets`
--

CREATE TABLE IF NOT EXISTS `dfm_tweets` (
  `webit_id` bigint(20) NOT NULL,
  `owner_id` varchar(25) NOT NULL,
  `cat` varchar(15) NOT NULL,
  `subcat` varchar(25) NOT NULL,
  `story` varchar(140) NOT NULL,
  `twdate` datetime NOT NULL,
  `picurl` varchar(255) NOT NULL,
  `linkurl` varchar(255) NOT NULL,
  `embedurl` varchar(255) NOT NULL,
  `where_at` varchar(25) NOT NULL,
  `where_in` varchar(25) NOT NULL,
  `change_date` datetime NOT NULL,
  PRIMARY KEY (`webit_id`),
  FULLTEXT KEY `tweet` (`story`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
