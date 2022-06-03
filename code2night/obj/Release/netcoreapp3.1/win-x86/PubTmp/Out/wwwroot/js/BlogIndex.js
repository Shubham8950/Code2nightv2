$(document).ready(function () {
    $(window).scroll(scrollHandler);
});

function ClearSearch() {
    $("#txtsearchblog").val("");
    $("#hdnIsFilter").val("false");
    $('#pagenumber').val("0");
    loadProducts(false, true);

}
function SearchBlogs() {
    if ($("#txtsearchblog").val() == "") {
        ShowLoader();
        ClearSearch();
    }
    else {
        ShowLoader();
        $("#hdnIsFilter").val("true");
        $('#pagenumber').val("1");
        var pagenum = $('#pagenumber').val();
        var ajaxCallUrl = '/Blog/FilterBlog';
        var data = {
            PageNumber: pagenum,
            search: $("#txtsearchblog").val(),
            IsFilter: ($("#hdnIsFilter").val() == "true")
        };
        $.ajax({
            type: 'POST',
            url: ajaxCallUrl,
            data: data,
            success: function (data, textstatus) {
                HideLoader();
                if (data != '') {
                    if ($('#pagenumber').val() > 1)
                        $("#blogslist").append(data);
                    else
                        $("#blogslist").html(data);
                    $("#blogslist").isotope('destroy');
                    $("#blogslist").isotope({
                        itemSelector: '.masonry-grid-item',
                        layoutMode: 'masonry'
                    });
                }
                else {
                    $('#pagenumber').val(parseInt($('#pagenumber').val()) - 1)
                }
            }
        });
    }
}
var ajaxCallUrl = '/Blog/FilterBlog',
    page = 0,
    inCallback = false,
    isReachedScrollEnd = false;

var scrollHandler = function () {
    if (isReachedScrollEnd == false &&
        ($(window).scrollTop() + $(window).height() > $(document).height() - 200)) {
        loadProducts(false, false);
    }
}
function loadProducts(IsFilter, IsWithoutTotal) {
    page = parseInt($('#pagenumber').val());
    if (parseInt($('#hdnTotalRecords').val()) > $('.masonry-grid-item').length || IsWithoutTotal) {
        if (page > -1 && !inCallback) {
            $('#loader').show();
            $("body").addClass("no-trans");
            inCallback = true;
            $('#pagenumber').val((parseInt($('#pagenumber').val()) + 1).toString());
            var data = {
                PageNumber: $('#pagenumber').val(),
                search: "",
                IsFilter: IsFilter
            };
            $.ajax({
                type: 'POST',
                url: ajaxCallUrl,
                data: data,
                success: function (data, textstatus) {
                    if (data != '') {
                        if ($("#hdnIsFilter").val() == "false") {
                            $("#hdnIsFilter").val('');
                            $("#blogslist").html(data);
                        }
                        else
                            $("#blogslist").append(data);
                        $("#blogslist").isotope('destroy');
                        $("#blogslist").isotope({
                            itemSelector: '.masonry-grid-item',
                            layoutMode: 'masonry'
                        });
                        $('#loader').hide();
                    }
                    else {
                        $('#pagenumber').val(parseInt($('#pagenumber').val()) - 1)
                    }
                    HideLoader();
                    inCallback = false;
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    ErrorMessage(errorThrown);
                }
            });
        }
    }
    else {
    }
}