-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 30, 2020 at 08:44 AM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `simppl`
--

-- --------------------------------------------------------

--
-- Table structure for table `pendaftaranmhs`
--

CREATE TABLE `pendaftaranmhs` (
  `nama` varchar(30) NOT NULL,
  `nim` int(20) NOT NULL,
  `ipk` int(20) NOT NULL,
  `nokwitansi` int(20) NOT NULL,
  `foto_mhs` varchar(40) NOT NULL,
  `id_mhs` int(11) NOT NULL,
  `email` varchar(20) NOT NULL,
  `password_mhs` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `pendaftaranmhs`
--

INSERT INTO `pendaftaranmhs` (`nama`, `nim`, `ipk`, `nokwitansi`, `foto_mhs`, `id_mhs`, `email`, `password_mhs`) VALUES
('test', 1, 1, 1, 'test', 1, 'test', 'test'),
('a', 2, 2, 2, 'a', 2, 'a', 'a'),
('lkjlkjkjLKJLK', 0, 0, 0, 'http://localhost:3000/images/lkjlkjkjlkj', 3, '', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `pendaftaranmhs`
--
ALTER TABLE `pendaftaranmhs`
  ADD PRIMARY KEY (`id_mhs`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `pendaftaranmhs`
--
ALTER TABLE `pendaftaranmhs`
  MODIFY `id_mhs` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
