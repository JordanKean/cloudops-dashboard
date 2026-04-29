// tests/dashboard.test.js
  // A simple test that checks the dashboard HTML is valid
 
  const fs = require('fs');
  const path = require('path');
  describe('CloudOps Dashboard', () => {

    let html;

    beforeAll(() => {
      // Read the actual index.html file
      html = fs.readFileSync(path.join(__dirname, '../index.html'), 'utf8');
    });

    test('contains the dashboard title', () => {
      expect(html).toContain('CLOUDOPS DASHBOARD');
    });

    test('contains a version badge', () => {
      expect(html).toContain('Deployed via Pipeline');
    });

    test('contains all 6 dashboard cards', () => {
      const cardCount = (html.match(/class="card"/g) || []).length;
      expect(cardCount).toBe(6);
    });

    test('has valid HTML structure', () => {
      expect(html).toContain('<!DOCTYPE html>');
      expect(html).toContain('</html>');
    });

  });
