function searchPlaces() {

    let search =
    document.getElementById("searchInput")
    .value.toLowerCase();

    let beach =
    document.getElementById("beach-section");

    let temple =
    document.getElementById("temple-section");

    let country =
    document.getElementById("country-section");

    beach.style.display = "none";
    temple.style.display = "none";
    country.style.display = "none";

    if(search.includes("beach")){
        beach.style.display = "block";
    }
    else if(search.includes("temple")){
        temple.style.display = "block";
    }
    else if(search.includes("country")){
        country.style.display = "block";
    }
    else{
        beach.style.display = "block";
        temple.style.display = "block";
        country.style.display = "block";
    }
}

function clearSearch(){

    document.getElementById("searchInput").value = "";

    document.getElementById("beach-section").style.display = "block";

    document.getElementById("temple-section").style.display = "block";

    document.getElementById("country-section").style.display = "block";
}