DROP DATABASE IF EXISTS korean_bash;

CREATE DATABASE korean_bash;

\c korean_bash;

CREATE TABLE korean_bash.korean_alphabet(
  id PRIMARY_KEY INT, korean text, english text
)
