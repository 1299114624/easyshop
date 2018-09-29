/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50612
Source Host           : localhost:3306
Source Database       : shop_1808

Target Server Type    : MYSQL
Target Server Version : 50612
File Encoding         : 65001

Date: 2018-09-29 16:37:23
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for shop_user
-- ----------------------------
DROP TABLE IF EXISTS `shop_user`;
CREATE TABLE `shop_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL,
  `mark` varchar(100) DEFAULT NULL,
  `ps` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=54 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of shop_user
-- ----------------------------
INSERT INTO `shop_user` VALUES ('2', 'xixi', '123', '1', null);
INSERT INTO `shop_user` VALUES ('6', '亚索', '12e', '3', null);
INSERT INTO `shop_user` VALUES ('7', 'pppp', '12e', '3', null);
INSERT INTO `shop_user` VALUES ('8', 'xixi2', '12e', '1', null);
INSERT INTO `shop_user` VALUES ('13', 'qudou', '11_11_22', '1', null);
INSERT INTO `shop_user` VALUES ('34', 'q', '123', null, '自动注册');
INSERT INTO `shop_user` VALUES ('52', '李青', '123', null, null);
INSERT INTO `shop_user` VALUES ('53', '李青2', '123', null, null);
