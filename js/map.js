window.onload = function () {

    let arr = document.getElementsByClassName('a');
    arr[0].style.backgroundColor = "#6BBAC9";

    let mapContainer = document.getElementById('map');
    let mapOption = {
        center: new kakao.maps.LatLng(37.503139, 127.024287),
        level: 3
    };

    let map = new kakao.maps.Map(mapContainer, mapOption);

    let mapTypeControl = new kakao.maps.MapTypeControl();
    map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

    let zoomControl = new kakao.maps.ZoomControl();

    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

    var marker = new kakao.maps.Marker({
        position: mapOption.center
    });

    marker.setMap(map);

    let geocoder = new kakao.maps.services.Geocoder();

    geocoder.addressSearch('서울특별시 서초구 서초동 1303-34', function (result, staus) {
        if (status === kakao.maps.services.Status.OK) {
            var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
            var marker = new kakao.maps.Marker({
                map: map,
                position: coords
            });
            map.setCenter(coords);
        }
    });

    document.getElementById('seo').onclick = function () {
        marker.setMap(null);
        geocoder.addressSearch('서울특별시 서초구 서초동 1303-34', function (result, status) {
            //정상적으로 검색 완료
            if (status === kakao.maps.services.Status.OK) {
                var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

                //마커표시
                var marker = new kakao.maps.Marker({
                    map: map,
                    position: coords
                });
                //지도 중심 이동
                map.setCenter(coords);
            }
        });
        document.getElementById('info1').innerHTML = '<h3>서초점 오시는 길</h3><div class="line"></div><h4>서울 서초구 강남대로 459<br>☎02-3486-9600</h4><div class="line"></div>';
        for (let i = 0; i < arr.length; i++) {
            arr[i].style.backgroundColor = "white";
        }
        this.style.backgroundColor = "#6BBAC9";
    }

    document.getElementById('jong').onclick = function () {
        geocoder.addressSearch('서울 종로구 종로 69 YMCA빌딩', function (result, status) {
            if (status === kakao.maps.services.Status.OK) {
                var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
                var marker = new kakao.maps.Marker({
                    map: map,
                    position: coords
                });
                map.setCenter(coords);
            }
        });
        document.getElementById('info1').innerHTML = '<h3>종로점 오시는 길</h3><div class="line"></div><h4>종로구 종로 69 YMCA빌딩 7층<br>☎02-722-1481</h4><div class="line"></div>';
        for (let i = 0; i < arr.length; i++) {
            arr[i].style.backgroundColor = "white";
        }
        this.style.backgroundColor = "#6BBAC9";
    }

    document.getElementById('shin').onclick = function () {
        geocoder.addressSearch('서울 마포구 백범로 23 구프라자', function (result, status) {
            if (status === kakao.maps.services.Status.OK) {
                var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

                var marker = new kakao.maps.Marker({
                    map: map,
                    position: coords
                });
                map.setCenter(coords);
            }
        });
        document.getElementById('info1').innerHTML = '<h3>신촌점 오시는 길</h3><div class="line"></div><h4>마포구 백범로 23 구프라자 3층<br>☎02-707-1480</h4><div class="line"></div>';
        for (let i = 0; i < arr.length; i++) {
            arr[i].style.backgroundColor = "white";
        }
        this.style.backgroundColor = "#6BBAC9";
    }

}
