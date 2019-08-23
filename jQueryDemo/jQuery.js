$(
    function () {
        /*   $('p').after(function () {
               return '<div>' + this.className + '</div>'
           });*/

        var html = ` <div class="test"> <p>test</p> </div> `;
        console.log($(".test"));
        console.log($(".test")[0]);
        console.log($(".test")[0].innerHTML);
        $(".test").after($(".test")[0]);
        $(".test").after($(".test")[0].innerHTML);
        $(".test").after(html);

        $(".test").after($("<p>123</p>"));


    }
);
