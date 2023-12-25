function func(){
document.getElementById('out_day').value="today";
var in_country = document.getElementById("input");
var out_country = document.getElementById("output");
var in_time = document.getElementById("intime");
var in_timev = in_time.value
var flag_h = 0
var flag_m = 0

let[hours, mins] = in_timev.split(":");

if (in_country.value == "Afghanistan"){
	hours = hours - 4
	mins = mins - 30
	flag_m = 30
}

else if (in_country.value == "Albania" || in_country.value == "Algeria" || in_country.value == "Andorra" || in_country.value == "Angola"){
	hours = hours - 1
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Antarctica (ART)" || in_country.value == "Argentina"){
	hours = hours - (-3)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Antarctica (GMT)" || in_country.value == "Burkina Faso"){
	hours = hours - 00
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Antigua and Barbuda"){
	hours = hours - (-4)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Armenia"){
	hours = hours - (4)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Australia (CXT)"){
	hours = hours - (7)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Australia (AWST)"){
	hours = hours - (8)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Australia (CWT)"){
	hours = hours - (8)
	mins = mins - 45
	flag_m = 45
}

else if (in_country.value == "Australia (ACST)"){
	hours = hours - (9)
	mins = mins - 30
	flag_m = 30
}

else if (in_country.value == "Australia (AEST)"){
	hours = hours - (10)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Austria" || in_country.value == "Belgium"){
	hours = hours - (1)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Azerbaijan"){
	hours = hours - (4)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Bahamas"){
	hours = hours - (-5)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Bahrain"){
	hours = hours - (3)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Bangladesh" || in_country.value == "Bhutan"){
	hours = hours - (6)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Barbados" || in_country.value == "Bolivia"){
	hours = hours - (-4)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Belarus"){
	hours = hours - (3)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Belize" || in_country.value == "Benin" || in_country.value == "Bosnia and Herzegovina" || in_country.value == "Cameroon"){
	hours = hours - (1)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Botswana" || in_country.value == "Bulgaria" || in_country.value == "Burundi"){
	hours = hours - (2)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Brazil Southwestern Amazonas"){
	hours = hours - (-5)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Brazil"){
	hours = hours - (-4)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Brazil Southeast/South/Northeast Region"){
	hours = hours - (-3)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Brunei"){
	hours = hours - (8)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Cambodia"){
	hours = hours - (7)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Canada (PT)"){
	hours = hours - (-8)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Canada (MT)"){
	hours = hours - (-7)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Canada (CT)"){
	hours = hours - (-6)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Canada (ET)"){
	hours = hours - (-5)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Canada (AT)"){
	hours = hours - (-4)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Canada (NT)"){
	hours = hours - (-3)
	mins = mins - (-30)
	flag_m = -30
}

else if (in_country.value == "Central African Republic (WAT)" || in_country.value == "Croatia"){
	hours = hours - (1)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Chile"){
	hours = hours - (-4)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "China"){
	hours = hours - (8)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Colombia"){
	hours = hours - (-5)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Comoros"){
	hours = hours - (3)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Costa Rica"){
	hours = hours - (-6)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Cuba"){
	hours = hours - (-5)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Cyprus" || in_country.value == "Democratic Republic of the Congo (CAT)" || in_country.value == "Egypt"){
	hours = hours - (2)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Czech Republic" || in_country.value == "Democratic Republic of the Congo (WAT)"){
	hours = hours - (1)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Denmark"){
	hours = hours - (1)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Djibouti"){
	hours = hours - (3)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Dominica"){
	hours = hours - (-4)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "East Timor"){
	hours = hours - (9)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Ecuador"){
	hours = hours - (-5)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "El Salvador"){
	hours = hours - (-6)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Equatorial Guinea"){
	hours = hours - (1)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Eritrea"){
	hours = hours - (3)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Estonia"){
	hours = hours - (2)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Ethiopia"){
	hours = hours - (3)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Fiji"){
	hours = hours - (12)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Finland" || in_country.value == "Greece"){
	hours = hours - (2)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "France (AST)"){
	hours = hours - (-4)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "France (PMST)"){
	hours = hours - (-3)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "France (CET)"){
	hours = hours - (1)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Gabon" || in_country.value == "Germany" || in_country.value == "Hungary"){
	hours = hours - (1)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Gambia" || in_country.value == "Ghana" || in_country.value == "Guinea" || in_country.value == "Iceland"){
	hours = hours - (0)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Georgia"){
	hours = hours - (4)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Grenada" || in_country.value == "Guyana"){
	hours = hours - (-4)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Guatemala"){
	hours = hours - (-6)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Haiti"){
	hours = hours - (-5)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Honduras"){
	hours = hours - (-6)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Hong Kong"){
	hours = hours - (8)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "India"){
	hours = hours - (5)
	mins = mins - 30
	flag_m = 30
}

else if (in_country.value == "Western Indonesia"){
	hours = hours - (7)
	mins = mins - 00
	flag_m = 00
}


else if (in_country.value == "Central Indonesia"){
	hours = hours - (8)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Eastern Indonesia"){
	hours = hours - (9)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Iran"){
	hours = hours - (3)
	mins = mins - 30
	flag_m = 30
}

else if (in_country.value == "Iraq"){
	hours = hours - (3)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Ireland" || in_country.value == "Ivory Coast" || in_country.value == "Liberia"){
	hours = hours - (00)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Israel"){
	hours = hours - (2)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Italy"){
	hours = hours - (1)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Ivory Coast"){
	hours = hours - (3)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Jamaica"){
	hours = hours - (-5)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Japan"){
	hours = hours - (9)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Jordan"){
	hours = hours - (3)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Western Kazakhstan"){
	hours = hours - (5)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Eastern Kazakhstan"){
	hours = hours - (6)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Kenya"){
	hours = hours - (3)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Kingdom of the Netherlands"){
	hours = hours - (1)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Kiribati (Gilbert)"){
	hours = hours - (12)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Kiribati (Phoenix)"){
	hours = hours - (13)
	mins = mins - 00
	flag_m = 00
}
 
else if (in_country.value == "Kiribati (Line)"){
	hours = hours - (14)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "North Korea" || in_country.value == "South Korea"){
	hours = hours - (9)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Kuwait"){
	hours = hours - (3)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Kyrgyzstan"){
	hours = hours - (6)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Laos"){
	hours = hours - (7)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Latvia" || in_country.value == "Lebanon" || in_country.value == "Lithuania" || in_country.value == "Malawi"){
	hours = hours - (2)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Liechtenstein" || in_country.value == "Madagascar"){
	hours = hours - (3)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Luxembourg" || in_country.value == "Malta"){
	hours = hours - (1)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Macau" || in_country.value == "Malaysia"){
	hours = hours - (8)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Maldives"){
	hours = hours - (5)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Mali" || in_country.value == "Mauritania"){
	hours = hours - (00)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Marshall Islands"){
	hours = hours - (12)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Mauritius"){
	hours = hours - (4)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Mexico (Southeast Zone)"){
	hours = hours - (-5)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Mexico (Central Zone)"){
	hours = hours - (-6)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Mexico (Pacific Zone)"){
	hours = hours - (-7)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Mexico (Northwest Zone)"){
	hours = hours - (-8)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Moldova"){
	hours = hours - (2)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Monaco"){
	hours = hours - (1)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Mongolia"){
	hours = hours - (8)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Morocco"){
	hours = hours - (1)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Myanmar"){
	hours = hours - (6)
	mins = mins - 30
	flag_m = 30
}

else if (in_country.value == "Namibia"){
	hours = hours - (2)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Nauru"){
	hours = hours - (12)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Nepal"){
	hours = hours - (5)
	mins = mins - 45
	flag_m = 45
}

else if (in_country.value == "Nicaragua"){
	hours = hours - (-6)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "New Zealand"){
	hours = hours - (12)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Nigeria" || in_country.value == "Norway"){
	hours = hours - (1)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Oman"){
	hours = hours - (4)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Pakistan"){
	hours = hours - (5)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Palau"){
	hours = hours - (9)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Palestine"){
	hours = hours - (2)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Panama"){
	hours = hours - (-5)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Paraguay"){
	hours = hours - (-4)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Peru"){
	hours = hours - (-5)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Philippines"){
	hours = hours - (8)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Poland"){
	hours = hours - (1)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Portugal"){
	hours = hours - (00)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Qatar"){
	hours = hours - (3)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Romania" || in_country.value == "Rwanda"){
	hours = hours - (2)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Russia (Kaliningrad Time)"){
	hours = hours - (2)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Russia (Moscow Time)"){
	hours = hours - (3)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Russia (Samara Time)"){
	hours = hours - (4)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Russia (Yekaterinburg Time)"){
	hours = hours - (5)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Russia (Omsk Time)"){
	hours = hours - (6)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Russia (Krasnoyarsk Time)"){
	hours = hours - (7)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Russia (Irkutsk Time)"){
	hours = hours - (8)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Russia (Yakutsk Time)"){
	hours = hours - (9)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Russia (Vladivostok Time)"){
	hours = hours - (10)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Russia (Magadan Time)"){
	hours = hours - (11)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Russia (Kamchatka Time)"){
	hours = hours - (12)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Saint Kitts and Nevis" || in_country.value == "Saint Vincent and the Grenadines"){
	hours = hours - (-4)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Samoa"){
	hours = hours - (13)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "San Marino"){
	hours = hours - (1)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Saudi Arabia"){
	hours = hours - (3)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Senegal" || in_country.value == "Sierra Leone"){
	hours = hours - (00)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Serbia"){
	hours = hours - (1)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Seychelles"){
	hours = hours - (4)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Singapore" || in_country.value == "Taiwan"){
	hours = hours - (8)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Slovakia" || in_country.value == "Slovenia" || in_country.value == "Spain" || in_country.value == "Sweden" || in_country.value == "Switzerland"){
	hours = hours - (1)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Solomon Islands"){
	hours = hours - (11)
	mins = mins - 00
	flag_m = 00
}
else if (in_country.value == "Somalia" || in_country.value == "Syria" || in_country.value == "Tanzania"){
	hours = hours - (3)
	mins = mins - 00
	flag_m = 00
}
else if (in_country.value == "South Africa" || in_country.value == "South Sudan" || in_country.value == "Sudan"){
	hours = hours - (2)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Sri Lanka"){
	hours = hours - (5)
	mins = mins - 30
	flag_m = 30
}
else if (in_country.value == "Suriname"){
	hours = hours - (-3)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Tajikistan"){
	hours = hours - (5)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Thailand"){
	hours = hours - (7)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Togo"){
	hours = hours - (00)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Tonga"){
	hours = hours - (13)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Trinidad and Tobago"){
	hours = hours - (-4)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Tunisia"){
	hours = hours - (1)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Turkey"){
	hours = hours - (3)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Turkmenistan"){
	hours = hours - (5)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Tuvalu"){
	hours = hours - (12)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Uganda"){
	hours = hours - (3)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Ukraine"){
	hours = hours - (2)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "United Arab Emirates"){
	hours = hours - (4)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "United Kingdom (AST)"){
	hours = hours - (-4)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "United Kingdom (FKST)"){
	hours = hours - (-3)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "United Kingdom (GMT)"){
	hours = hours - (00)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "United Kingdom (CET)"){
	hours = hours - (1)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "United Kingdom (EET)"){
	hours = hours - (2)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "United States (ST)"){
	hours = hours - (-11)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "United States (HT)"){
	hours = hours - (-10)
	mins = mins - 00
	flag_m = 00
}


else if (in_country.value == "United States (AKT)"){
	hours = hours - (-9)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "United States (PT)"){
	hours = hours - (-8)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "United States (MT)"){
	hours = hours - (-7)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "United States (CT)"){
	hours = hours - (-6)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "United States (ET)"){
	hours = hours - (-5)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "United States (AST)"){
	hours = hours - (-4)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Uruguay"){
	hours = hours - (-3)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Uzbekistan"){
	hours = hours - (5)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Vatican City"){
	hours = hours - (1)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Venezuela"){
	hours = hours - (-4)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Vietnam"){
	hours = hours - (7)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Yemen"){
	hours = hours - (3)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Zambia" || in_country.value == "Zimbabwe"){
	hours = hours - (2)
	mins = mins - 00
	flag_m = 00
}


if (mins < 0 && mins >= -flag_m){
	mins = 60 + mins;
	hours = hours - 1;
}
if (mins < 0 && mins < -flag_m) {
	mins = 60 + mins;
	hours = hours + 1;
}
if (hours < 0) {
	hours = 24 + hours;
	flag_h = 1;
}
if (hours > 24) {
	hours = hours - 24;
	flag_h = -1;
}
if (mins > 60){
	mins = mins - 60
	hours = hours + 1
}

var x = in_country.value;
in_country.value = out_country.value;

if (in_country.value == "Afghanistan"){
	hours = hours - (-4)
	mins = mins - (-30)
	flag_m = -30
}

else if (in_country.value == "Albania" || in_country.value == "Algeria" || in_country.value == "Andorra" || in_country.value == "Angola"){
	hours = hours - (-1)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Antarctica (ART)" || in_country.value == "Argentina"){
	hours = hours - (3)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Antarctica (GMT)" || in_country.value == "Burkina Faso"){
	hours = hours - 00
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Antigua and Barbuda"){
	hours = hours - (4)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Armenia"){
	hours = hours - (-4)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Australia (CXT)"){
	hours = hours - (-7)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Australia (AWST)"){
	hours = hours - (-8)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Australia (CWT)"){
	hours = hours - (-8)
	mins = mins - (-45)
	flag_m = -45
}

else if (in_country.value == "Australia (ACST)"){
	hours = hours - (-9)
	mins = mins - (-30)
	flag_m = (-30)
}

else if (in_country.value == "Australia (AEST)"){
	hours = hours - (-10)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Austria" || in_country.value == "Belgium"){
	hours = hours - (-1)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Azerbaijan"){
	hours = hours - (-4)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Bahamas"){
	hours = hours - (5)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Bahrain"){
	hours = hours - (-3)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Bangladesh" || in_country.value == "Bhutan"){
	hours = hours - (-6)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Barbados" || in_country.value == "Bolivia"){
	hours = hours - (4)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Belarus"){
	hours = hours - (-3)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Belize" || in_country.value == "Benin" || in_country.value == "Bosnia and Herzegovina" || in_country.value == "Cameroon"){
	hours = hours - (-1)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Botswana" || in_country.value == "Bulgaria" || in_country.value == "Burundi"){
	hours = hours - (-2)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Brazil Southwestern Amazonas"){
	hours = hours - (5)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Brazil"){
	hours = hours - (4)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Brazil Southeast/South/Northeast Region"){
	hours = hours - (3)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Brunei"){
	hours = hours - (-8)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Cambodia"){
	hours = hours - (-7)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Canada (PT)"){
	hours = hours - (8)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Canada (MT)"){
	hours = hours - (7)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Canada (CT)"){
	hours = hours - (6)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Canada (ET)"){
	hours = hours - (5)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Canada (AT)"){
	hours = hours - (4)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Canada (NT)"){
	hours = hours - (3)
	mins = mins - (30)
	flag_m = 30
}

else if (in_country.value == "Central African Republic (WAT)" || in_country.value == "Croatia"){
	hours = hours - (-1)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Chile"){
	hours = hours - (4)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "China"){
	hours = hours - (-8)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Colombia"){
	hours = hours - (5)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Comoros"){
	hours = hours - (-3)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Costa Rica"){
	hours = hours - (6)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Cuba"){
	hours = hours - (5)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Cyprus" || in_country.value == "Democratic Republic of the Congo (CAT)" || in_country.value == "Egypt"){
	hours = hours - (-2)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Czech Republic" || in_country.value == "Democratic Republic of the Congo (WAT)"){
	hours = hours - (-1)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Denmark"){
	hours = hours - (-1)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Djibouti"){
	hours = hours - (-3)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Dominica"){
	hours = hours - (4)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "East Timor"){
	hours = hours - (-9)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Ecuador"){
	hours = hours - (5)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "El Salvador"){
	hours = hours - (6)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Equatorial Guinea"){
	hours = hours - (-1)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Eritrea"){
	hours = hours - (-3)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Estonia"){
	hours = hours - (-2)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Ethiopia"){
	hours = hours - (-3)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Fiji"){
	hours = hours - (-12)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Finland" || in_country.value == "Greece"){
	hours = hours - (-2)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "France (AST)"){
	hours = hours - (4)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "France (PMST)"){
	hours = hours - (3)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "France (CET)"){
	hours = hours - (-1)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Gabon" || in_country.value == "Germany" || in_country.value == "Hungary"){
	hours = hours - (-1)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Gambia" || in_country.value == "Ghana" || in_country.value == "Guinea" || in_country.value == "Iceland"){
	hours = hours - (0)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Georgia"){
	hours = hours - (-4)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Grenada" || in_country.value == "Guyana"){
	hours = hours - (4)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Guatemala"){
	hours = hours - (6)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Haiti"){
	hours = hours - (5)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Honduras"){
	hours = hours - (6)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Hong Kong"){
	hours = hours - (-8)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "India"){
	hours = hours - (-5)
	mins = mins - (-30)
	flag_m = -30
}

else if (in_country.value == "Western Indonesia"){
	hours = hours - (-7)
	mins = mins - 00
	flag_m = 00
}


else if (in_country.value == "Central Indonesia"){
	hours = hours - (-8)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Eastern Indonesia"){
	hours = hours - (-9)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Iran"){
	hours = hours - (-3)
	mins = mins - (-30)
	flag_m = -30
}

else if (in_country.value == "Iraq"){
	hours = hours - (-3)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Ireland" || in_country.value == "Ivory Coast" || in_country.value == "Liberia"){
	hours = hours - (00)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Israel"){
	hours = hours - (-2)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Italy"){
	hours = hours - (-1)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Ivory Coast"){
	hours = hours - (-3)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Jamaica"){
	hours = hours - (5)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Japan"){
	hours = hours - (-9)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Jordan"){
	hours = hours - (-3)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Western Kazakhstan"){
	hours = hours - (-5)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Eastern Kazakhstan"){
	hours = hours - (-6)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Kenya"){
	hours = hours - (-3)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Kingdom of the Netherlands"){
	hours = hours - (-1)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Kiribati (Gilbert)"){
	hours = hours - (-12)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Kiribati (Phoenix)"){
	hours = hours - (-13)
	mins = mins - 00
	flag_m = 00
}
 
else if (in_country.value == "Kiribati (Line)"){
	hours = hours - (-14)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "North Korea" || in_country.value == "South Korea"){
	hours = hours - (-9)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Kuwait"){
	hours = hours - (-3)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Kyrgyzstan"){
	hours = hours - (-6)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Laos"){
	hours = hours - (-7)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Latvia" || in_country.value == "Lebanon" || in_country.value == "Lithuania" || in_country.value == "Malawi"){
	hours = hours - (-2)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Liechtenstein" || in_country.value == "Madagascar"){
	hours = hours - (-3)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Luxembourg" || in_country.value == "Malta"){
	hours = hours - (-1)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Macau" || in_country.value == "Malaysia"){
	hours = hours - (-8)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Maldives"){
	hours = hours - (-5)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Mali" || in_country.value == "Mauritania"){
	hours = hours - (00)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Marshall Islands"){
	hours = hours - (-12)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Mauritius"){
	hours = hours - (-4)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Mexico (Southeast Zone)"){
	hours = hours - (5)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Mexico (Central Zone)"){
	hours = hours - (6)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Mexico (Pacific Zone)"){
	hours = hours - (7)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Mexico (Northwest Zone)"){
	hours = hours - (8)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Moldova"){
	hours = hours - (-2)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Monaco"){
	hours = hours - (-1)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Mongolia"){
	hours = hours - (-8)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Morocco"){
	hours = hours - (-1)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Myanmar"){
	hours = hours - (-6)
	mins = mins - (-30)
	flag_m = -30
}

else if (in_country.value == "Namibia"){
	hours = hours - (-2)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Nauru"){
	hours = hours - (-12)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Nepal"){
	hours = hours - (-5)
	mins = mins - (-45)
	flag_m = -45
}

else if (in_country.value == "Nicaragua"){
	hours = hours - (6)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "New Zealand"){
	hours = hours - (-12)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Nigeria" || in_country.value == "Norway"){
	hours = hours - (-1)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Oman"){
	hours = hours - (-4)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Pakistan"){
	hours = hours - (-5)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Palau"){
	hours = hours - (-9)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Palestine"){
	hours = hours - (-2)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Panama"){
	hours = hours - (5)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Paraguay"){
	hours = hours - (4)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Peru"){
	hours = hours - (5)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Philippines"){
	hours = hours - (-8)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Poland"){
	hours = hours - (-1)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Portugal"){
	hours = hours - (00)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Qatar"){
	hours = hours - (-3)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Romania" || in_country.value == "Rwanda"){
	hours = hours - (-2)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Russia (Kaliningrad Time)"){
	hours = hours - (-2)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Russia (Moscow Time)"){
	hours = hours - (-3)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Russia (Samara Time)"){
	hours = hours - (-4)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Russia (Yekaterinburg Time)"){
	hours = hours - (-5)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Russia (Omsk Time)"){
	hours = hours - (-6)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Russia (Krasnoyarsk Time)"){
	hours = hours - (-7)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Russia (Irkutsk Time)"){
	hours = hours - (-8)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Russia (Yakutsk Time)"){
	hours = hours - (-9)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Russia (Vladivostok Time)"){
	hours = hours - (-10)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Russia (Magadan Time)"){
	hours = hours - (-11)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Russia (Kamchatka Time)"){
	hours = hours - (-12)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Saint Kitts and Nevis" || in_country.value == "Saint Vincent and the Grenadines"){
	hours = hours - (4)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Samoa"){
	hours = hours - (-13)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "San Marino"){
	hours = hours - (-1)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Saudi Arabia"){
	hours = hours - (-3)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Senegal" || in_country.value == "Sierra Leone"){
	hours = hours - (00)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Serbia"){
	hours = hours - (-1)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Seychelles"){
	hours = hours - (-4)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Singapore" || in_country.value == "Taiwan"){
	hours = hours - (-8)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Slovakia" || in_country.value == "Slovenia" || in_country.value == "Spain" || in_country.value == "Sweden" || in_country.value == "Switzerland"){
	hours = hours - (-1)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Solomon Islands"){
	hours = hours - (-11)
	mins = mins - 00
	flag_m = 00
}
else if (in_country.value == "Somalia" || in_country.value == "Syria" || in_country.value == "Tanzania"){
	hours = hours - (-3)
	mins = mins - 00
	flag_m = 00
}
else if (in_country.value == "South Africa" || in_country.value == "South Sudan" || in_country.value == "Sudan"){
	hours = hours - (-2)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Sri Lanka"){
	hours = hours - (-5)
	mins = mins - (-30)
	flag_m = -30
}
else if (in_country.value == "Suriname"){
	hours = hours - (3)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Tajikistan"){
	hours = hours - (-5)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Thailand"){
	hours = hours - (-7)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Togo"){
	hours = hours - (00)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Tonga"){
	hours = hours - (-13)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Trinidad and Tobago"){
	hours = hours - (4)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Tunisia"){
	hours = hours - (-1)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Turkey"){
	hours = hours - (-3)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Turkmenistan"){
	hours = hours - (-5)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Tuvalu"){
	hours = hours - (-12)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Uganda"){
	hours = hours - (-3)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Ukraine"){
	hours = hours - (-2)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "United Arab Emirates"){
	hours = hours - (-4)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "United Kingdom (AST)"){
	hours = hours - (4)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "United Kingdom (FKST)"){
	hours = hours - (3)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "United Kingdom (GMT)"){
	hours = hours - (00)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "United Kingdom (CET)"){
	hours = hours - (-1)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "United Kingdom (EET)"){
	hours = hours - (-2)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "United States (ST)"){
	hours = hours - (11)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "United States (HT)"){
	hours = hours - (10)
	mins = mins - 00
	flag_m = 00
}


else if (in_country.value == "United States (AKT)"){
	hours = hours - (9)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "United States (PT)"){
	hours = hours - (8)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "United States (MT)"){
	hours = hours - (7)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "United States (CT)"){
	hours = hours - (6)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "United States (ET)"){
	hours = hours - (5)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "United States (AST)"){
	hours = hours - (4)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Uruguay"){
	hours = hours - (3)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Uzbekistan"){
	hours = hours - (-5)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Vatican City"){
	hours = hours - (-1)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Venezuela"){
	hours = hours - (4)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Vietnam"){
	hours = hours - (-7)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Yemen"){
	hours = hours - (-3)
	mins = mins - 00
	flag_m = 00
}

else if (in_country.value == "Zambia" || in_country.value == "Zimbabwe"){
	hours = hours - (-2)
	mins = mins - 00
	flag_m = 00
}

in_country.value = x;

if (mins < 0 && mins >= -flag_m){
	mins = 60 + mins;
	hours = hours - 1;
}
if (mins < 0 && mins < -flag_m) {
	mins = 60 + mins;
	hours = hours + 1;
}
if (hours < 0) {
	hours = 24 + hours;
	flag_h = 1;
}
if (hours >= 24) {
	hours = hours - 24;
	flag_h = -1;
}
if (mins >= 60){
	mins = mins - 60
	hours = hours + 1
}




if (flag_h == 1){
document.getElementById('out_day').value="yesterday";
}
if (flag_h == -1){
document.getElementById('out_day').value="next day";
}
if (hours < 10 && mins >= 10){
document.getElementById('out').value= "0"+hours + ":" + mins;
}
else if (hours >= 10 && mins < 10){
document.getElementById('out').value=hours + ":" + "0" + mins;
}
else if (hours < 10 && mins < 10) {
document.getElementById('out').value="0" + hours + ":" + "0" +mins;
}
else {
document.getElementById('out').value=hours + ":" + mins;
}

}
