<template>
    <div class="contact">
        <div class="container pt-4">
            <div class="row">
                <div class="col-md-4 text-left">
                  <h2>{{  $t('sections.contact.address.label') }}</h2>
                  <p class="lead"> 
                    {{  $t("sections.contact.address.line1") }} <br>
                    {{  $t("sections.contact.address.line2") }} <br>
                    {{  $t("sections.contact.address.line3") }} <br>
                    {{  $t("sections.contact.address.line4") }} 
                  </p>
                  <h2>{{  $t('sections.contact.admin.label') }}</h2>
                  <p class="lead" v-for="(p, index) in $t('sections.contact.admin.list')" :key="index">
                    {{ p.name }}<br/>
                    <strong>{{ p.mobile }}</strong>
                  </p>
                </div>
                <div class="col-md-8">
                    <iframe
                        width="100%"
                        height="450"
                        frameborder="0"
                        style="border:0"
                        src="https://www.google.com/maps/embed/v1/place?q=22.281007,70.796541&key=AIzaSyBQOeYUC0cz1Ia-JLZ0xP0v75BaGxY9AkI&zoom=18">
                    </iframe>
                </div>
            </div>
        </div>
    </div>
</template>

