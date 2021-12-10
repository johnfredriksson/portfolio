---
Title: analysis
Template: analysis-single
---

**Sökmotorer och val av grafisk profil med inriktning på färg**
=======================

I denna analys tittar vi närmre på världens tre mest använda sökmotorer och dess grafiska profil. Fokus läggs på 
val av färg och dess påverkan för användarvänligheten. Vi kommer också analysera dess val av typsnitt.

Urval
-----------------------

De sökmotorer som kommer studeras är [Google](https://google.se), [Yahoo](https://se.yahoo.com) och [Bing](https://bing.se).
Dessa valdes ut då studier visar att Google, Yahoo och Bing är de mest besökta sökmotorerna 2021.

Metod
-----------------------

Vi besöker första sidan för de tre olika valda webbplatserna. Med hjälp av "dev-tools inspect" kan vi se vilket typsnitt som används 
och dess storlek. Vi lägger in länken till sidan i [Colorcombos](https://www.colorcombos.com/grabcolors.html) för att analysera färgen 
som finns. Vi provar även att ställa in mörkt läge i operativsystemet OSX för att se vilka sidor som har stöd för detta.

Resultat
-----------------------

<!-- Dokumentera dina resultat från din studie. Berätta vad du kom fram till, vilka resultat du hittade och observerade. -->

## Google

[![Google](%assets_url%/img/google.webp "Googles landningssida")](%assets_url%/img/google.webp)<br>

### Färg

Här finner vi ett akromatiskt färgschema, med en stilfull och minimalistisk layout. Fokus läggs på de väsentliga delarna av sidan. För att 
bryta av det akromatiska temat så har de en färgglad logotyp, denna innehåller röd, gul, grön, blå. Stöd för mörkt läge finns.

<table style="border-spacing: 4px; border-collapse: separate">
<tr>
<td style="height: 50px; width: 50px; background-color: #2d2d2d">
<td style="height: 50px; width: 50px; background-color: #bebebe">
<td style="height: 50px; width: 50px; background-color: #c0c0c0">
<td style="height: 50px; width: 50px; background-color: #4c4c4c">
<td style="height: 50px; width: 50px; background-color: #dd4b39">
<td style="height: 50px; width: 50px; background-color: #dd8e27">
<td style="height: 50px; width: 50px; background-color: #3079ed">
<td style="height: 50px; width: 50px; background-color: #419f44">
</tr>
</table>

### Typsnitt

Texten för menyval i sidfot och huvud upplevs svårt att läsa då bakgundsfärg och färg på text inte skiljer så mycket, vi ser vitt och ljusgrått.
Det är en bra storlek på typsnittet, radavstånd saknas då det inte finns text som delas på två rader.

<code>font-family: arial,sans-serif; font-size: 14px;</code>

## Yahoo

[![Yahoo](%assets_url%/img/yahoo.webp "Yahoos landningssida")](https://se.yahoo.com)<br>

### Färg

Yahoo har valt ett monokromatiskt färgschema med lila som grund. Dessa färger återfinns över hela sidan i blandade delar 
och kompletteras med en akromatisk skala. Stöd för mörkt läge saknas.

<table style="border-spacing: 4px; border-collapse: separate">
<tr>
<td style="height: 50px; width: 50px; background-color: #401590">
<td style="height: 50px; width: 50px; background-color: #6023d2">
<td style="height: 50px; width: 50px; background-color: #5d5eff">
<td style="height: 50px; width: 50px; background-color: #188fff">
</tr>
</table>

### Typsnitt

Lättläst typsnitt med starkt kontrast till bakgrund. Ett bra radavstånd gör det enkelt att urskilja raderna och 
samtidigt följa med i texten. Lagom storlek på texten.

<code>YahooSans,'Helvetica Neue',Helvetica,Arial,sans-serif; font-size: 13px; line-height: 1.3;</code>

## Bing

[![Bing](%assets_url%/img/bing.webp "Bings landningssida")](https://bing.se)<br>

### Färg

Vid första anblick så har vi en mycket rörig landningssida som kan kopplas till den bakgrundsbild som är vald.
Tittar vi närmre så är layouten snarlik med Google och även här är färgschemat akromatiskt, med en blå ton som accent. 
Stöd för mörkt läge saknas.

<table style="border-spacing: 4px; border-collapse: separate">
<tr>
<td style="height: 50px; width: 50px; background-color: #4f4f4f">
<td style="height: 50px; width: 50px; background-color: #919191">
<td style="height: 50px; width: 50px; background-color: #00809d">
<td style="height: 50px; width: 50px; background-color: #f5f5f5">
</tr>
</table>

### Typsnitt

Väldigt svår text att läsa på landningssidan, typsnittet fungerar utmärkt men i sidhuvudet smälter texten in i bakgrundsbilden. I sidfoten 
finner vi samma problem då bakgrundsfärgen är mörkgrå och texten grå.

<code>font-family: "Segoe UI",Segoe,Tahoma,Arial,Verdana,sans-serif; font-size: 16px;</code>

Analys
-----------------------

<!-- Diskutera och analysera de resultaten du fann. -->

Det var intressant att genomföra analysen av dessa frekvent använda webbplatser. Varje sida utmärkte sig på ett eget sätt, på gott och ont, när vi 
tittar på de olika delarna. Google har valt en väldigt enkel och minimalistisk design med sökfältet och logotypen i fokus, som talar för att denna 
sidan söker vi information på, inget annat. Yahoo har varit lite lekfullare med färgval då de valt ett monokromatiskt färgschema för att liva upp sidan.
Sidan som jag reagerat starkast på var hos Bing, här händer det för mycket. Hela sidan fylls av en bakgrundsbild som sträcker sig från kant till kant. 
Den innehåller nästan hela färgskalan och gör att allt innehåll flyter ihop med den. Sidan på svårare att använda<br>

För typsnitt så hittar vi fler likheter, enklare typsnitt med ett lättläst attribut och liknande textstorlek. Inga av sidorna använder sig av serif. 
För Bing och Google hade det varit bra med ökade kontraster på text och bakgrundsfärg, för att få en mer lättläst sida.<br>

Jag trodde att fler sajter skulle ha stöd för mörkt läge men det var bara Google som har valt att implementera den funktionaliteten. Det intressanta 
var att när Google kördes i mörkt läge så ökade kontrasten på färgen för bakgrund och typsnitt.

Referenser
-----------------------

[Google](https://google.se)<br>
[Yahoo](https://se.yahoo.com)<br>
[Bing](https://bing.se)<br>
[Studie om popularitet för sökmotorer](https://www.reliablesoft.net/top-10-search-engines-in-the-world/)<br>
[Färgplockare](https://www.colorcombos.com/grabcolors.html)<br>

Övrigt
-----------------------

John Fredriksson, jofr21.