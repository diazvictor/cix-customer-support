# Makefile for Luachi
#
# Copyright (c) 2020  Díaz  Víctor  aka  (Máster Vitronic)
# Copyright (c) 2020  Díaz  Urbaneja Victor Diego Alejandro  aka  (Sodomon)
#
# This is free software, licensed under the GNU General Public License v2.
# See /LICENSE for more information.
#

SQLITE3     = /usr/bin/sqlite3
DB          = ./luachi.db
SCHEMA_DB   = ./extra/database/schema.sql
MSGFMT      = /usr/bin/msgfmt
LOCALE_PO   = ./locales/es_ES.UTF-8/LC_MESSAGES

all: locale db
    
locale:
	$(MSGFMT) --check-accelerators=_ $(LOCALE_PO)/messages.po -o $(LOCALE_PO)/messages.mo

db:
	$(SQLITE3) $(DB) < $(SCHEMA_DB)
   
clean:
	rm -f $(DB) $(LOCALE_PO)/messages.mo
