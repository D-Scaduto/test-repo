select concat('pics' ,substring(picurl from (instr(picurl, 'cs/keepers' )+ char_length('cs/keepers')) for char_length(picurl) )) from dfm_products