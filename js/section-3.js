$(window).on("load", function () {
    gsap.registerPlugin(ScrollToPlugin);

    function scrollToIndex(index, currentIndex) {
        const $carouselItem = $(".carousel-inner-content__carousel-item"),
            $carouselWrapper = $(".carousel-wrapper");

        gsap.to($carouselWrapper, 0.5, {
            scrollTo: {
                x: (currentIndex > index ? '-=' : '+=') + ($carouselItem.width() * Math.abs(currentIndex - index))
            }
        });
    }

    $('.section__item').on('click', function () {
        const selectedIndex = $(this).attr('data-index'),
            currentIndex = +$('#current_index').val();

        if (currentIndex != selectedIndex) {
            $('.section__item--active').removeClass('section__item--active');
            $('.section__item[data-index=' + selectedIndex + ']').addClass('section__item--active');
            $('#current_index').val(selectedIndex)
            scrollToIndex(selectedIndex, currentIndex);
        }
    })
})