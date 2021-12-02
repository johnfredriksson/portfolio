---
Title: analysis
Template: analysis-single
---

**Analys av 3 lokala restaurangers webbplatser med fokus på laddningstid**
=======================

<!-- Skriv en eller två rader om vad uppgiften handlar om. -->
I denna analys vill vi titta närmre på hemsidan för 3 olika restauranger för att lära oss hur prestandan ser ut. Vi kollar närmre 
på laddningstider för olika enheter som dator och mobil.

Urval
-----------------------

<!-- Berätta vilka webbplatser du valt att undersöka och varför eller hur du gick tillväga när du gjorde ditt urval. -->
Urvalet är baserat på de 3 geografiskt närmaste restaurangerna med mitt hem som utgångspunkt, folkets park i Malmö. Dessa restauranger 
är [Far i Hatten](https://www.farihatten.se/), [Lyran](https://www.lyranmatbar.se/) och [Royal biljard](https://royalpool.se/). 3 välbesökta 
ställen av mig såväl som många andra malmöiter.

Metod
-----------------------

<!-- Berätta kort om din "metod", hur du gör för att utföra undersökningen. Berätta om du använder något speciellt verktyg. -->

Vi väljer 3 sidor för respektive webbplats för att jämföra prestandan och laddningstid. Dessa 3 har valts efter de mest besökta delarna 
för en restaurangs webbplats, landningssida, meny och boka bord. Vi använder oss av Google PageSpeed och Devtools Network för att samla 
resultatets data för att sedan presenteras i en kalkyl.

Resultat
-----------------------

<!-- Dokumentera dina resultat från din studie. Berätta vad du kom fram till, vilka resultat du hittade och observerade. -->

### Far i hatten

[![Far i Hatten](%assets_url%/img/farihatten.png "Far i hattens landningssida")](%assets_url%/img/farihatten.png)<br>

På landningssidan möts vi av mycket färg och bilder, samt effekter som laddas när vi skrollar oss igenom innehållet. 
Både Meny och Boka är lika varandra med en stor bild som spänner sig över sidans bredd som kompletteras med olika textstycken.
För förbättringsförslag, se kalkyl nedan.

### Lyran

[![Lyran](%assets_url%/img/lyran.png "Lyrans landningssida")](%assets_url%/img/lyran.png)<br>

Hela webbplatsen är uppbyggd av en enda sida, länkarna för navigering scrollar användaren nedåt i flödet.
En större mängd bilder går att skåda på sidan.
För förbättringsförslag, se kalkyl nedan.

### Royal biljard

[![Royal Biljard](%assets_url%/img/royalbiljard.png "Royal biljards landningssida")](%assets_url%/img/royalbiljard.png)<br>

En väldigt grafisk förstasida med en gif som spänner sig över hela fönstret. Även denna webbplats består av en enda sida med 
länkar som scrollar ner användaren till valt objekt.
För förbättringsförslag, se kalkyl nedan.

<div class="embeded-container">
    <iframe width="100%" height="300px" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQUf_z5zQLe_jjQo-J84iILpSmVGgwUVxctImSwkIxw5eLhEGWovF-y1p-6PSsBarLjfII2VyclxoYw/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"></iframe>
</div>



Analys
-----------------------

<!-- Diskutera och analysera de resultaten du fann. -->

Det första mönstret vi ser i kalkylen är hur varje webbplats presterar på en dator respektive mobil enhet. För datorer så ligger prestanda-värdet mellan 88 och 61.
Går vi över till en mobil enhet får vi resultat på mellan 38-17. Det upplevs att webbplatserna är designade för större enheter och att inga åtgärder har tagits för att anpassa sig 
mot enheter med mindre skärmar.

Efter en ytlig inspektion av sidkällan via Devtools kan vi konstatera att samtliga sidor är byggda med ett så kallad WYSIWYG-program. En förkortning som står för <em>What You See Is What You Get.</em>
Ett program där du bygger en webbplats på ett mer visuellt sätt utan att behöva kunskaper inom programmering. Men denna information kan vi säkert säga att webbplatserna i analysen är byggda för större enheter och få eller inga funktioner har lagts till för att optimera oss mot mindre enheter.

Det är ingen av webbplatserna som upplevs direkt snabb, ibland känns de rätt hackiga när det är en laddningstid på runt 3 sekunder där en stor blandning element blinkar till och laddas in. 
Jag tycker det är svårt att bestämma vart gränsen går för en snabb webbplats, men jag vill höfta på 2 sekunder som tak. En siffra som ingen av webbplatserna i analysen lever upp till.
Enligt kalkylen är placering baserat på kortast laddningstid med Lyran i starten som följs av Far i Hatten och sist Royal Biljard. Det är i samma ordning som jag skulle placera de i ett sådant lopp.
Inte endast på grund av laddningstiden utan även med orsak av hur innehållet kommer upp på i fönstret, Lyran har mjukast övergång.

Vi ser även en röd tråd där det kommer till förbättringsåtgärder. Samtliga webbplatser och dess sidor har rekommenderad åtgärd <em>Ta bort resurser som blockerar renderingen</em>. Både Far i Hatten och Lyran får upp <em>Reducera JavaScript som inte används</em>. Royal Biljard har överlägset flest rekommenderade åtgärder. Det finns stora likheter mellan Far i Hatten och Lyran, medan de skiljer sig från Royal Biljard. Detta tror jag beror på att de två första är byggda i Squarespace och den sistnämnda i WordPress.

Det vore intressant att forska vidare inom ämnet med fokus på miljö och energiförbrukning. Kan vi optimera dessa webbplatser för att vi ska konsumera mindre energi vid laddning av restaurangers hemsidor?

Referenser
-----------------------

[Far i Hatten](https://www.farihatten.se/)<br>
[Lyran](https://www.lyranmatbar.se/)<br>
[Royal biljard](https://royalpool.se/)<br>
[Google PageSpeed](https://pagespeed.web.dev/?utm_source=psi&utm_medium=redirect&hl=sv)

Övrigt
-----------------------

John Fredriksson, jofr21