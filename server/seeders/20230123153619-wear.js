'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert("wears", [
            {
                wear: "패딩",
                temperature: "0",
                gender: "공용",
                category: "outer",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                wear: "가죽자켓",
                temperature: "10",
                gender: "공용",
                category: "outer",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                wear: "트렌치코트",
                temperature: "15",
                gender: "공용",
                category: "outer",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                wear: "후리스",
                temperature: "10",
                gender: "공용",
                category: "outer",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                wear: "니트",
                temperature: "10",
                gender: "공용",
                category: "top",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                wear: "면셔츠",
                temperature: "15",
                gender: "공용",
                category: "top",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                wear: "맨투맨",
                temperature: "10",
                gender: "공용",
                category: "top",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                wear: "면바지",
                temperature: "20",
                gender: "공용",
                category: "bottom",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                wear: "생지청바지",
                temperature: "5",
                gender: "공용",
                category: "bottom",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                wear: "청바지",
                temperature: "10",
                gender: "공용",
                category: "bottom",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                wear: "반바지",
                temperature: "20",
                gender: "공용",
                category: "bottom",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('wears', null, {});

    },
};
