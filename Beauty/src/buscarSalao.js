const API_KEY = "a9a010b97a7e43d980cb0fa4b4c448c0"; // Sua chave da API Geoapify

window.onload = function () {
    // Inicializa o mapa com uma localização padrão (Pelotas, RS)
    let map = L.map("map").setView([-31.7709, -52.3429], 13);

    // Adiciona a camada do OpenStreetMap
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap contributors"
    }).addTo(map);

    const infoDiv = document.getElementById("mensagem");
    const ul = document.getElementById("resultados");

    // Torna a função global para funcionar com onclick
    window.buscarSaloes = async function () {
        infoDiv.textContent = "Procurando sua localização...";
        ul.innerHTML = ""; // Limpa resultados anteriores

        // Verifica se o navegador suporta geolocalização
        if (!navigator.geolocation) {
            infoDiv.textContent = "Geolocalização não suportada pelo navegador.";
            return;
        }

        // Tenta obter a localização do usuário
        navigator.geolocation.getCurrentPosition(async (pos) => {
            const lat = pos.coords.latitude;
            const lon = pos.coords.longitude;
            console.log("Localização atual:", lat, lon);

            // Centraliza o mapa e marca o usuário
            map.setView([lat, lon], 15);
            L.marker([lat, lon]).addTo(map).bindPopup("Você está aqui").openPopup();

            infoDiv.textContent = "Buscando salões próximos...";

            // CATEGORIA CORRIGIDA: Usando 'service.beauty' que é mais universalmente suportada
            // Esta string não precisa de encodeURIComponent porque não tem caracteres especiais.
            const category = "service.beauty"; 

            // Monta a URL da API Geoapify
            // Importante: a ordem dos parâmetros filter e bias é LON,LAT
            const url = `https://api.geoapify.com/v2/places?categories=${category}&filter=circle:${lon},${lat},10000&bias=proximity:${lon},${lat}&limit=15&apiKey=${API_KEY}`;
            
            console.log("URL de requisição Geoapify:", url); // Log da URL antes do fetch

            try {
                const res = await fetch(url);
                
                // Verifica se a resposta não foi bem-sucedida (ex: 400, 401, 403, 500)
                if (!res.ok) {
                    const errorData = await res.json(); // Tenta ler a resposta de erro como JSON
                    console.error("Erro da API Geoapify:", errorData);
                    // Exibe a mensagem de erro da API, se disponível
                    infoDiv.textContent = `Erro: ${errorData.message || 'Requisição falhou.'}. Verifique o console para mais detalhes.`;
                    return; // Sai da função para não tentar processar dados inválidos
                }

                const data = await res.json();
                console.log("Dados da API Geoapify:", data);

                if (!data.features || data.features.length === 0) {
                    infoDiv.textContent = "Nenhum salão encontrado por perto.";
                    return;
                }

                infoDiv.textContent = ""; // Limpa mensagem de busca
                data.features.forEach((item) => {
                    const nome = item.properties.name || "Salão sem nome";
                    const endereco = item.properties.formatted || "Endereço não disponível";
                    // As coordenadas da Geoapify vêm como [lon, lat], precisamos reverter para Leaflet [lat, lon]
                    const coord = item.geometry.coordinates.slice().reverse(); 

                    L.marker(coord).addTo(map)
                        .bindPopup(`<b>${nome}</b><br>${endereco}`);

                    const li = document.createElement("li");
                    li.textContent = `${nome} - ${endereco}`;
                    ul.appendChild(li);
                });

            } catch (erro) {
                console.error("Erro na requisição ou processamento:", erro);
                infoDiv.textContent = `Erro ao buscar os salões: ${erro.message}. Verifique sua conexão ou a API Key.`;
            }

        }, (erro) => {
            console.error("Erro de localização:", erro);
            infoDiv.textContent = "Erro ao obter sua localização: " + erro.message;
            // Em caso de erro de localização, mostre a opção para ativar o GPS
            if (erro.code === erro.PERMISSION_DENIED) {
                infoDiv.textContent += " Por favor, permita o acesso à sua localização no navegador.";
            } else if (erro.code === erro.POSITION_UNAVAILABLE) {
                 infoDiv.textContent += " Sinal de localização indisponível. Verifique seu GPS ou conexão.";
            }
        });
    };
};