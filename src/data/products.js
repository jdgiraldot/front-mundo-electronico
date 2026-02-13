// ─── Demo Products (shared data source) ──────────────────────────────
// This file serves as the data source during development.
// When the .NET API is ready, these can be replaced by API calls.

export const demoProducts = [
    {
        id: 1,
        name: 'Arduino Uno R3',
        price: 45000,
        imageUrl: 'https://placehold.co/600x400/1a2540/38bdf8?text=Arduino+Uno',
        stock: 15,
        category: 'Microcontroladores',
        description: 'Placa de desarrollo Arduino Uno R3 con microcontrolador ATmega328P. Ideal para prototipado rápido y aprendizaje de electrónica.',
    },
    {
        id: 2,
        name: 'Sensor Ultrasónico HC-SR04',
        price: 8000,
        imageUrl: 'https://placehold.co/600x400/1a2540/a78bfa?text=HC-SR04',
        stock: 30,
        category: 'Sensores',
        description: 'Sensor de distancia ultrasónico con rango de 2cm a 400cm. Precisión de ±3mm.',
    },
    {
        id: 3,
        name: 'Módulo Relay 4 Canales',
        price: 12000,
        imageUrl: 'https://placehold.co/600x400/1a2540/34d399?text=Relay+4CH',
        stock: 8,
        category: 'Módulos',
        description: 'Módulo de 4 relés optoacoplados para Arduino. Soporta hasta 10A / 250VAC por canal.',
    },
    {
        id: 4,
        name: 'Protoboard 830 puntos',
        price: 7500,
        imageUrl: 'https://placehold.co/600x400/1a2540/fbbf24?text=Protoboard',
        stock: 25,
        category: 'Herramientas',
        description: 'Protoboard de 830 puntos de conexión con buses de alimentación.',
    },
    {
        id: 5,
        name: 'Kit Resistencias 600pcs',
        price: 15000,
        imageUrl: 'https://placehold.co/600x400/1a2540/f87171?text=Resistencias',
        stock: 0,
        category: 'Componentes Pasivos',
        description: 'Kit de 600 resistencias surtidas de 10Ω a 1MΩ. Precisión ±1%.',
    },
    {
        id: 6,
        name: 'ESP32 DevKit V1',
        price: 35000,
        imageUrl: 'https://placehold.co/600x400/1a2540/38bdf8?text=ESP32',
        stock: 12,
        category: 'Microcontroladores',
        description: 'Módulo de desarrollo ESP32 con WiFi 802.11 b/g/n y Bluetooth 4.2. Procesador dual-core Xtensa.',
    },
];
