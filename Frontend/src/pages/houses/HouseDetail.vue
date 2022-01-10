<template>
  <section>
    <hero-component></hero-component>
    <div class="flex flex-col items-center md:my-24 md:space-y-6">
      <img
        class="h-11/12"
        src="https://houzy.wpengine.com/wp-content/uploads/2020/04/realestate-listing-3.jpg"
        alt=""
      />

      <div class="w-24 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div class="bg-blue-600 h-2.5 rounded-full" style="width: 45%"></div>
      </div>
    </div>

    <!-- Second main section after the image -->
    <div class="flex md:flex-row flex-col md:ml-28">
      <div class="basis-3/5 border-2 p-8 space-y-4">
        <div class="flex flex-row">
          <div class="flex-1">
            <h2 class="text-3xl font-bold">{{ houseName }}</h2>
          </div>
          <div class="space-x-8 mr-6">
            <span><i class="far fa-heart fa-2x"></i></span>
            <span><i class="fas fa-share-alt-square fa-2x"></i></span>
          </div>
        </div>

        <div>
          <h1 class="text-2xl font-bold"><sub>$</sub>40000</h1>
        </div>

        <div>
          <a href="#" class="text-md hover:font-medium"
            ><router-link to="/houses"
              ><span><i class="fas fa-map-marker-alt mr-2"></i></span>6 Kilo
              Yekatit 12 Square</router-link
            ></a
          >
        </div>
        <div class="w-full h-0.5 bg-gray-200"></div>
        <div class="space-y-4 pt-5">
          <h1 class="text-2xl font-bold text-blue-900">Property Overview</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            dui felis, molestie id varius non, gravida sed nibh. Nullam
            sollicitudin augue sed turpis pharetra lobortis. Pellentesque
            pretium in leo vitae tincidunt.
          </p>
          <div class="flex flex-row space-x-8">
            <p class="mt-2">
              <span class="mr-2"><i class="fas fa-chart-area"></i></span>
              Sq Ft: 3800
            </p>
            <p class="mt-2">
              <span class="mr-2"><i class="fas fa-bed"></i></span>
              Beds: 2
            </p>
            <p class="mt-2">
              <span class="mr-2"><i class="fas fa-shower"></i></span>
              Baths: 2
            </p>
          </div>
        </div>

        <div class="w-full h-0.5 bg-gray-200"></div>
        <div class="pt-8">
          <h1 class="font-bold text-2xl">Near you</h1>
          <h1>Display all the homes near the person</h1>
        </div>

        <div class="md:pt-8 pt-5">
          <h1 class="font-bold text-2xl">Location</h1>
          <div class="map-responsive mt-5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d279672.375392017!2d38.7370819398653!3d9.075541662355954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8f68908aad97%3A0x6c67d2e35cbb4d62!2s6%20Kilo%20Yekatit%2012%20Square!5e1!3m2!1sen!2set!4v1641409119796!5m2!1sen!2set"
              width="600"
              height="450"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      <!-- Right Side bar -->
      <div class="basis-2/5 md:mr-20 mt-4">
        <div class="flex flex-col">
          <!-- first col -->
          <div class="mx-8 bg-blue-200 p-5">
            <h1 class="font-bold text-2xl">Property Owner</h1>
            <div class="w-full p-3">
              <div
                class="flex flex-col lg:flex-row rounded overflow-hidden h-auto border shadow"
              >
                <img
                  class="block w-full lg:w-40 mt-4 flex-none bg-cover h-28"
                  src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUWFRgWFhUYGBgYGBgaGBgYGBgYGBoYGBgZGRgYGBgcIS4lHB4rHxgYJjgmKy8xNTU1GiQ7QDszPy40NTEBDAwMEA8QHxISHjQrJCw0NDQ0NDQ0NDY0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAOAA4QMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAEBQMGAAIHAQj/xAA/EAACAQIEAwUGAgkDBAMAAAABAgADEQQSITEFQVEGImFxgRMykaGx8AfBFCNCUmJygtHhM3OiQ5Ky8RZTwv/EABkBAAMBAQEAAAAAAAAAAAAAAAECAwAEBf/EACQRAAICAgICAgIDAAAAAAAAAAABAhEDIRIxBEFRYSKBMnHB/9oADAMBAAIRAxEAPwCrYVdY0wyxPhamukb4epFjQrYblg9elCEeaVGmktBTF1rSZHnjieKsio0zSkbmDVxCbQauZSydiTGC0BeMcWwvBAoMyYyYBUWRiMHpSCpRjJjEuEQmNaOFuJtw/hpQIz2GY2yAnOB+8y20Hj10j1kSnkJcIC4tmZQTYZsubZTsCdNxtcWDjJsWrK+2FN9o4wXDbjaEcM4ybur02dnYsrr+sYhSBZCLanMLW1OU3M3XtG6jvoia2UqinVSGYMGLWsqte1ySQNjcZ4n8lE1VHrcPtykTULTdOPtVyOi5gTlamKYZrhRuUIKrcaPY77EwujSeoCcjIysVe/u5hbRTvrddGsbnS8EsbSEaF60pDVoxu+FZDZlKnoRY/OB1qcg36FsAVes2LiZVQzVaZjxkZM20kFRJu9xIajRrCC11kTgWm9V9ZFmjJjGj09LwVljEi8gqII1gsFtMkmSZBZrGGFNozo1IjR4ZQcyalQrY7SpPWeBUiYSoj3ZrPbSVKc9RYQiwpCtkDpFuONhHDpF+PwpImdAKzWfWRI8Nq4QiCNTymKmmUSJ0S8kQBWW657sO6dBbmTqPhzJEjRo3HDHqvh6VHL7Qlndr3C0yAcz31AAK2HPMOZ0ZLYY7YpqY+uuchu8WuX0vcDoNDuRbUD0BBGGL5EdUL1Q1yzKrrY6EEkdL/GXrA9n6KaBS7Hd21vbnbYc44pcNULog9AJKXlK6irOyPitq5OjnWI4zjXZC10KaDIgXdgSxZAG3sSB0guOxzplDOK6Fyxp1M5QWIuozHNciwve1idNZ2DDcBpuAGUaWPgR0iLtF2Lw5JKswJ1PnztKxyfjykTlh3xicxw2KelTZ6NT2bl8pAsGdHWw0y5feBJFxvsbCx3AOKOyOikKCpZzc5mAOuU7KddtrA72134x2TqIpyMGFjdee3Ly/OVXM9JgVYqQRcbHTTX4tGjkjPcWTlCUdSR0GvxLIuZXJqMEqNQZCAyuQvcbYPe1x3bXNjyhKPnQOAbHfQ6HxvEHDKlOo9qakd3K93BQF7Zns2bMe6Dow/wBPqYTieJJTxOSlWz4c2VGJZzmZVVmU3AZgzNY3O2uu+nBSRJqxgad5o1KGuE3QkqdRcANb+IDY76SIpOaqdMWhZWXrAa7RriKfOKsQusKew2AuJCTCykGqpaOmE2VzPbyBGkqmYzR7pMmaTJgEaRphaUCw9LWOsLTiSYPZPRpQj2clp05IacMWZkKC0JpiQ5YVSSUTFbN1SeNhbw7D0LxhTwok5SMVLF8O6CVfiFAqbWnUMXhRaVPjGFFjpEi9jqVFWwy5TmJyhAXJG/dFxbxJAHrLv2dZqVAMda+J/WVDbRUbvU6a9AAb26t4CVnhmDNSqiD9tsul7kH3gLfw5peVwZztmOt9uQ8B4Q5pOMdezq8WKlK2G4Z4yRoHh6K23hlNROaJ3yDaWI0gOOYmHpTFoFiFlp7jROOnYjxKyg9tOHqrBx+3uOV5f8Z70p3bNbgC+2v3985Px9TN5FOBRkqKCAQPEG5BB5aWPwk+BxAVlsRlzXYeB0a48vpB8QB98oKmk9M84v8A2bJJq6gglW0NxmJbMQeh7p9essIpygdj8YwxKqdRUBU9RlUlT4f5nSfZTjzakJLsWYineLKuF1lhdIG9OKmIJGw1oBiaMsVSnFuLpw2MmIBT1k6pJ3payZKUpY1gnspkM9nMmsFmYWnHOGpxXhd47wwkL2TC6dObmnNqYk6reOpBBhShdDDySlRvGOGw8onoFGuGpQ5FmyUrTHkZOjA2KtaVDjrXuBLPiWlZ4ot7xIz2ZsS4Gu9LNUQXcDIlxoHfu5if5PaSVcLjm7yYkMx1KGwHp1m+IpsmHGUG5d203OVFVf8AzaQ9muFVPaK9aoDTIOdC7DUjQ9Lg9bjwl2/tfs7cC/Hp/ob8Ox2Ip2SvuecfPin9mWXflfaAYXhxqVQivmRGDAk3I0PdPjsdNLchzZcZNiKa7Cwvy6XnPJU7O2KtUJqXaXFhwq0ldegNj53JjxOMHT2tJkJ0vuuviJQ0wuLasDTc2zEEBgO7pY+d76eEe43iNak4pVQXRhbOFyjbmCTYep85Zfx3RF2pasa4tgTob9COhlT7VUDlLjYix8Dpb0/vLFgvd8OXrraA8VQEFTsROeMuM7Lyjyg0cyr7wWosPxNOxseunpeLS5B1nppnltFi/D9Acatx+y9tNja3pzHrOr1KM5r+GWDZ8YW1ypTZm9SAo+Ov9M6xVE5s1ORnG0JK0BqRji1iau8krRJ6PGi/ErDC2kGqiZSFsAKTYLJGWRsY1jWaWmTXNPZrNZrhGjvDVIiw2kZ0XiSWxR3ReHUVvFWDaOsMsVOjJh2HSMaSCCURDqYlIyMbmDV2hJWDslzBIwrxKkxXUwhaWZ8PB3w9pNKmYWvw9VSlffKx+Lvb5WmtbAUwuYIt/rIKnEC9RuiH2Y8k7o+l4q7QcZYIxpn3OZ2JNoW+UqPYwrhjRd+CYYIjMd7cuvhF3EQL6g68+hlY4f2yZqXdXvkAEObKOrFukMpcYruuRkptf9xzz2JzARpRbVUUjKN3fY0rcCRyGXR+bIbX8+p84dS4OFUFzmPIkC/yED/SjRdMx0YLfpmtrG9bFBlzX0mVbvsEvXwK6uFCiwAHpK/xRrX8ATHeJxY11lW4rXuT85DuQ3SKph8E1apkvYXOp136fCWyh2dwqIbUPasbBnqFue2RRoB4wHhuHAII3vcW+Y++kt2GDezZHN8jIASLEjN3b/0mdEsjukyePDHtqwXsLwIYdq9QaK5RUUm5VVBYgnnq1vJZY8QZmCp2U+JJ/L6gzXECK5Nu2edlaUml1YpxOsU1acdVkgFSnDyZzykABJG9OHlJA6QWBC2qkGcRlVSL8QsCYQSZMvMj2YjpNDqBiyk8ZYaVlEMkPMAkfYVYkwPKPsLOeQBphqd40o0gBBcEukZINJ0Y1SMRvTEHemBDGgVd9bQzriBmrrAcW1oWzRZjqm85m6BZU8OhZ6/UNUPrdoj4moFT2OQuWyhVF9Ta5NuZ/tHWEq5cS4OzFvnr9DJvaKMSj2GemxZTvbMpUm1xfQnS485SFcmevG5QVCfCcCZ1DfotWxIF1JFyNQLeo2jrIqkD2NZGGm2ba1x1/wDcvOB4wci5ijOLtZabrrawA9629r31tykeO41lvmprfv5SNNWtYm+vUHy9JVx1dmUm3Tj/AIUWrjQ4Izhrbqe6/wD2dfKMMBVY07Ek5WIBPMcvWE18GjsHNNVK+4APd7trk8yfzmzhUXKPMzmyMtHsX4kfSIa+rG8fYxwBKziKupkorY0nrY87M4HM+cEgL3Vtb3rXN7joZY3wpVgl7kktfpyzHyG3jOb4XjVbDM7o4y7srDMCQNxroeUvXAa9b2Yauwao/eawsFuNEA8PreWcKVs5svkKEddlhUAAAbAW+EHxAmLVmjtMpI83kC1EgFanGFRoNVgk0CrFrCRvCKg1g1YRUCqA8QYrxLRlXaKMS8oomB5kj1mRuIaBcM8eYE3tK5h31j3AvtLSRmWXBR/hBK7gTtLDgTINAHuCMaKdIqwpjFHjxlRjyq0Acaw9lkfsLxZSb0BgL3tE+OvYyzVMNpEfEqNhJtC0UTid1cOPX0/x9JFiHcjOgBIIveMeJ0gbg85W2xr0Kxo1BYo2Ui+lxcb8x0lYwclaO/BlSXFjbh/Fq5ZbINSOR2va/hsZc0puyguQT4DTwlNbiyAC1swuLfKNB2hGgzDQXY+lwPhC4tro6+e9ux8z2GsT4nEakwM8VzbQPFYm855RbZRSSNcfiyTvFb6zesCZuFsI8UooVtszg+BD1lB2T9YfHKRYH1t8Jc6TG8VdjKFzVe2llQfNj/8AmOqiWMaS0eX5DuTCEeYzyJHnrGc/F2c6RDUqSJqokrpF9XQxnFjXR7VaBVqk3qPAa1SVjE3ZFiH0i19YRWeQRl2FGns5kkmRwlcQG8cYBjA1pR1wvDSsmqNJj3AbCWPACJ8FSlgwVOc4qQ0w0LSD0FhSiFIJuphdFIMiQmm1oeJj2usQ8UXQx5WeK8XgWYXN1XXpew3OpAHqRGUHLSRirYHhy1avf9xdW5XsCbX5Cw38ot7Ydk3xRevSW7hj7tu8NSB566R1xkhKFcoCCuHq2F+9mZTYnbvWUH1AAi/8IeME4LENXclKDAhm1KoEzEX3IFjO6OJYoJPthjfZyxsG6MVa4IuCGBRh4Eb3hWFwZtZn06AnXwnW6+I4XxMBRVUVLdwkGnVHhZgM48NZV+K9jK2GJYrnp/voNAP413T6eMlki49HTjkm6YpoOAAAJMykwujg7C9pKKB6fScEns74pi72U8TDM7KiKWdjZQBckx9w3gFbENamtlvq50QddeZ8BrOi8A7O0sKvdGZyO85Gp6hR+yvh8bymPG5O30Sy5VFUuyu4Hg36LSWm1i5GdyNizb/CwHpAMYbGPOK8USpXqUVJL0kQt/Uzg/DKNfGIMeY2aLWjzJ3LZqhhiKTyg2AA3jMERY41WxUL6ggNdY1xIESYitBONGYJXi2tCq1aA1aggiZAtQ6zy01qOLz1HjcRj209mWmRuJgXDpcyw4BIlwaSx8Opk6QtNukBjbBJtH2GWRcP4JUbko2Nyw2692+ke4bgpG7r6An62hWNhUWaUVFoSq9ITTwKru17eQE3OJRRpYfCPHC2NXyR08KTvp57/CEDDAb3MU8U7RU6IUvmszZe6AxvYnXUaaQuhVZ7FT3W53sQOljqDLLFXZtBhZRoLCIOOhz3UcgMbuRa+Ubi5Ol/CNnRspN/Cxtt0NpW+MOqI9R17qWBsNSeSqTz19Br0vfFGKd2K9iLGcQp0gKbM2eq6KBYkurOqsSSb7c4V27wSYbBYlaChXxT00IUWDMwJdrbAlA9zOd47iLs5qk2dWUppcLlYMLeVpe+22IbFYXDZAUR2Vi4OiuVYCm1tf2WW/UAc48m5So3RzdMHYDqJcezPbLEYayVL1ae2VjdgP4GP0OnlBKPA1UXd3J8CMvzEC4jVoUhmYlugzH8rToljTX5CKW9FxxXFeF1rstX9Fe/eV0IUjrYd0X6q3mJPw7FcNVDUfECtlNrKGCE72U7P8bciJzl1xBT2v6MyU29y4dLjqC4IN99OsExOWrbcFBYi4Nidbac9fHacj8XG3ZdZpqPGzpPE/xUp0xahQBA0AZsoA/lUWHxmnZf8Sq2KxlDDmnTVajOGKh8wC03YWJa3vKOW05gnDc2xB+vwjfsXgXp8Rwz7gVCLjlmRl2PnDLFS0hOXyy31uHV8PxGnXdi9PEGtTb9laZqVHdEuBtdufMHlpLLjuBmquaiQGsSabMP+J/v8Zp+ItBzg3NMhPZFKhJ3ORht0P8AaadkOOmtTFRgVY3DALmW67lRuAd7eY6RZQjkjVAToT0c9NijqyN0YWPn4jxh3tJeKi06q5XVWXlcAjwI6Sv8S7Kg3NB8p/cYkr6NuPW85XBx6Bxa6K/iq2m8SVFvN+JUK9FgtZWTXQnVW/lYaGRM0k1faMlYHiU6GJa1Q3tHlcRNiaffm4pDUQgXk1MSUUtJgSByRjy8ybWmReRjbArtC8RxhaZCgAkHvDl5Qam2RGf91S3wFwJW0D6udS2oJ+vrednjR3YKOqcK7UqyXLDMguQL+4TZrA9DY+hjVO1Kaa+U5Lw/EMjqSLixDDqrAqw+BMkSoNBr4zuUUBnUa/aVbe95xfV7TXPO3mb/AH6yjJVGpsZuriwGusdRRiw8Z4rmVBe9mzW5A7D43MjHEKjLlztbpc2+USV2zBtToCBfrGXCsUgKuylhobA2v6xJqmBDahiMTRQ1A90Ui1Op30a+90bbflYxbxbij1zmeygCyomYItgB3EJIXblCeM8YatlUKERdkGuvUnmYlrnSToIrqLcN6S+djWbF8PqYcWLoUqJc5RcNmIv09ohJPSpKSBcHw/vGX4bcT9jigCbKajU2/krME+AcU2PgpiNtO0N2Wp+yuKrMBUqJRQ/spmqOR5kKFPxjvg/YPCUiG9majge/WOcg9QtsinxAvLqMOoINthaSgQTzuQYwoi/R1tbKPhOfdqewQzNWwigFjmekLAE82Tx8J0eZJRySi7Qzimj5vx2FZDmRSGBsyEEFSPDlLJ+GyVa+MXOoy0Faozc8zhkRDrzzM39E6Xx7svRxOrLZuTL3W+ImvZTs6mEVwpZmdszu1rnQKqi2mUAaeZ6zolmThomob2Ifxhx3ssAyA61CF/pBF/mVlO/Dri9hkN7OMwI5MPe8x/aTfjZxkMy4dSD3gTYg2FMH4XaowP8AtypdiMXkdT+61j4ht/r8pKD3Q1aO88MxiZWzOLLc3YjQX69BGIrKwuGNraNaykcrH9r0vOWY7FlK4ue7e6kE3F/yjrHUWTLUovYvuGYkMQBcqNwfBYzjbFsteOxQZLApUBsWVlzKwvqMp5RXiuzOFq6oWpMdsveU/wBJ19ARFWDoV0OZ3zqQdMuVvO17geY+EhTjZVipIFmI57A2uIyxKWgNm2O7DVwL03Sp4aofQG4+cqmP7O4qmxaph3AH7QGdfVkuBLvS7Rst+8CNxYmGU+1q7FrE+Xw15ycvGYbRzFktoQQeh0MjZZeuOYmnXQ5rZg3cbQEAgHLfmtza3KUyulpwZ8UsTV9MaMbQNaeTfLPZKwUbYhF9i+ba2vU3I0HidpV6jlzdjb3QANgOQHoI841UAQITqben3/eIrr0O5+U9XBHjHfsyJRbU5vCEoWudeX1gSMthpuYQSp5nUj5ffznTFmYamawFxrCEY3J00giFb3udB92kilbc9TKJihgvYba7zbAe7l/dJHwOnytIFdbk66TbBkB2A/a73rsfoIuRasCDWg9Y6QhoNWkgkKJcN5RZgBauy3ID51uNCM17EeINo4oDRvKKsZSKsrj96/wMWQT6K7P8Q9vhqVY+86KXA5OBZ19GBHpGUo/4Y44NRq0b603DqP4Kwz/+Yqy8TlkqdFU7R7MmTIAnkF4ji1pUnqNsisxHM5Rew8Tt6wqUX8UuMClhxTB1e7t/LTsVHq5p+YDQxVugN0jhPabGtWxLuxucxBPK9yWI82LH1kvZ5++y9V+n2IoFySesY8KOWqh63H5/lKRf5WCtUXTGYnOEPhrC+F8fq0RZSGT91tR/iJAeXQyUGdBIuSdp0dbOGQ+BuPjK7xFyXbLbVmKnqMxN4tYzQ4kEa3uuo9CAbdTHx6YGStiXB5a6eRtvIKuIc8h0OvPXbWQO6NcAkaBh5+MHqKNbOdRm8efwEq2FINHFHXuNew5Da9vz0jWhXWqmdfJh0b7sZWHqtYga87+X3aNuzSOGcHVXFx4Mp2+DfKcPlx5Y39bGT4jL2cyHezmTx+RuRSMbii7sxF9T5ADYCQhm6cpHdj8vmbzcqddeg+/vlPdQTe50GX5TBU1W43JB9NvrMAYHflIq5OTyIP5fnG6MMqbmxOXcwlGa+wsB93i+ixIXvSQ1Pe7/AIff3ylFIRoODvbzM2LsHUnYafH/ANCCoVuBm2ExyMrENzuPTUQy2qAh450grme0XuoPhMqLIhMpc/KbPhg9HxBM1o8/KE8MqAh15qQbeDDQ/EN8IDMd/hzjDTxdJSbCrTeiR/En6xCfRKg/qnYZwcVjRIqr/wBGolXTmEYFh6rmHrO603BAINwQCD1B2kMq3ZSD0STJkySHPJ8/filxv21Z8p7pbKv+3SJW/kzl28rTs3a7iZw+Fd1NnayU/wDcc5VPpct5KZ818cqZ6xVfdSyL5Lp/eUitNivboGwWHLbQhKf60AfskEnxOlvmfhGtCkKNBnbe2nmYDSQolz7zHMfyEdRBY7vr8DJFMiJ2PgJuhlhDGkCVHsLAEK5B8iRtrvJ3MDRQb9+2bMLeKnlHx9gYPUYgi6bX+O/qZotVbC623B/z8NpM+Y2IYHY/kQL+UGDOBtezfduu8ZhI2vZbGwIP5/3jXsrictTJe4df+QBII+BEVZVNsxO/1hHD8UiVEIGzWJ8Dpf4EyORXF/0EvcyCZ26TJ4vF/BMoSqL6nn9JsAvjqZ4GA5crzZSNNJ7SKm6ga6zWtTOXQ7g/SZmFjpzmtRR15E/KH0Y8wriw8pOhW225+/KA4F9Bp1+sY0mOmnOaDtGZMjrcnLsNPrtJcy2UW3+nnIc72Om5+/OSh2zDTYf49JZCBXDqndsNgSPgdPlaGsLxRgHOdgRa9mHjyP0EbLIvsLPEG/lB6dfI6Mdicj+T+6fRgPiYUdjA61IOjA7dPQwMyHlRAwZTzBB9ROo9gsb7XAYdibsqezbrmpE0zfzyX9ZyDheLLoMx7y9x/wCYWs3qCD6y+/hPjNMVhyfcqioo/hqrqB/UjH+qSybVhjpnRZkyRVqoRWdjZVBZj0Ci5PwEgVOZfilxf9YtMHu4dDUb/dqApSHmFzn+sTkvCcIalS51G5j/ALS45q+ZzfPiKhqEHcJ7tNPRAogYBpIKSf6lTn+6vMy/GqXwSv2bYr9a9h/p0/8Ak/8AiCY+M3pKiBF5D49SYnxZuZVqkBDRGui+UkQwfCnuJ5SUGZBokqNpFi1Ut7vMHQ9d7Q6q2kUNiLAaW7uunU7GNF0CjZ3S+hI38rBgR6Tx1IDWbn6/4kdWsuu99tLDz19bTysV1t1X1N/nzhbQSOs2pAHMSNHdSD431206wsFjflsR6SHE097t1+esSUX2Esn/AMsH/wBQ+M9lT9mOvymRK+jUghSxvp0Emu19thIgvjuZvY2Ov35SiMeX02nrOutxsPvT5+k8N9JIHazaX2H2YUYXYY22jCkTpraLaDQyn4xIMLCl2He59fvlCEU3bvcvvSB07ab7ycZbHU7/AH5y0WIzfMVemSRY3U/1C418wBHiHSVvHKLXB1UBh5rqPKWDCuGQMNiAR6ycv5G9ErbGAu9rjrb84ZU2MBqJcE+kDMiHC4jJVsdFqWU+DfsN8bj1EuP4Z47LxN0P/VoMp/npsGH/ABzfGUKsmYEG/gRyPI+ka9n+Jezx+ExB0PtFp1OgLfq3PlZ83kRJP4G+z6PlP/EbiGXDigps2JbIeopjvVT/ANvd/rlwnIO0uP8A0nF1XB7lL9RT6d03quPN+75IJPHG5DTeir4sqC1Z/dXRR5aAQHhiG7V395/dHReQnmOqe2fKP9ND/wBxHPymuIxPIaAS67smSYite5ivEbSZ6l5G+ohbsK0GYE/qlkokGA9y3Qn6whJo9GZpiWsp62NvO0X4io9gSLgr4ddvjf5QzHP3d7ajX1EDemLWD7E7+Gpv8I8emYHcsf2eY5eXTx+k8qPytY3Fj9+k2yPoM19R8hr9TIqzm4DdWIt6CB9BRvUTmWtptNQy211Nh/aRVvymiOQdB0iOWwk3tB+4Zk39v4fOZDZj/9k="
                />
                <div
                  class="rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal space-y-2"
                >
                  <h1 class="font-bold text-xl">Mekuanint abebe</h1>
                  <h1>incharge</h1>
                  <p>
                    <span class="mr-2 font-medium"
                      ><i class="fas fa-phone"></i></span
                    >+251948737567
                  </p>
                  <p>
                    <span class="mr-2 font-medium"
                      ><i class="fas fa-envelope-square"></i></span
                    >mikiabebe@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
          <!-- first col ends here -->
          <div class="mx-8 bg-blue-200 p-5 mt-9">
            <h1 class="font-bold text-2xl">Utilities</h1>
            <div class="flex flex-row space-x-2 md:space-x-4 my-4">
              <button
                class="bg-green-900 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
              >
                Bus Stand
              </button>
              <button
                class="bg-blue-900 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
              >
                Hospitals
              </button>
              <button
                class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
              >
                Gym
              </button>
            </div>
            <div class="flex flex-row md:space-x-4 space-x-2">
              <button
                class="bg-yellow-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
              >
                Pool
              </button>
              <button
                class="bg-green-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
              >
                Hotel
              </button>
              <button
                class="bg-red-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
              >
                Playing Area
              </button>
            </div>
          </div>
          <!-- second col ends here -->
          <div class="mx-8 bg-blue-200 p-5 mt-9">
            <h1 class="font-bold text-2xl">Contact Form</h1>

            <form class="w-full max-w-lg mt-8">
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-first-name"
                  >
                    First Name
                  </label>
                  <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="text"
                    placeholder="Jane"
                  />
                  <p class="text-red-500 text-xs italic">
                    Please fill out this field.
                  </p>
                </div>
                <div class="w-full md:w-1/2 px-3">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-last-name"
                  >
                    Last Name
                  </label>
                  <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-last-name"
                    type="text"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-password"
                  >
                    E-mail
                  </label>
                  <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="email"
                    type="email"
                  />
                  <p class="text-gray-600 text-xs italic">
                    Some tips - as long as needed
                  </p>
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-password"
                  >
                    Message
                  </label>
                  <textarea
                    class="no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                    id="message"
                  ></textarea>
                  <p class="text-gray-600 text-xs italic">
                    Re-size can be disabled by set by resize-none / resize-y /
                    resize-x / resize
                  </p>
                </div>
              </div>
              <div class="md:flex md:items-center">
                <div class="md:w-1/3">
                  <button
                    class="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                    type="button"
                  >
                    Send
                  </button>
                </div>
                <div class="md:w-2/3"></div>
              </div>
            </form>
          </div>
          <!-- contact form ends here -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import HeroComponent from "../../components/UI/HeroComponent.vue";
import appartment from "../../store/modules/appartment";
export default {
  props: ["id"],
  components: { HeroComponent },
  data() {
    return {
      selectedAppartment: null,
    };
  },
  computed: {
    houseName() {
      return this.selectedAppartment.name;
    },
  },
  created() {
    this.selectedAppartment = this.$store.getters["appartment/appartments"];
    this.selectedAppartment = this.selectedAppartment.find(
      (appartment) => appartment.id == this.id
    );
  },
};
</script>

<style scoped>
.map-responsive {
  overflow: hidden;

  padding-bottom: 56.25%;

  position: relative;

  height: 0;
}

.map-responsive iframe {
  left: 0;

  top: 0;

  height: 100%;

  width: 100%;

  position: absolute;
}
</style>
